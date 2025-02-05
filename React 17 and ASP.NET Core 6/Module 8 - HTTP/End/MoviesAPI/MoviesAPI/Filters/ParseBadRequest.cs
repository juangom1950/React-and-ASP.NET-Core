﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Filters
{
    // We need to register this filter as a Global Resourse in the Startup.cs
    public class ParseBadRequest : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            var result = context.Result as IStatusCodeActionResult;

            if (result == null)
            {
                return;
            }

            var statusCode = result.StatusCode;

            if (statusCode == 400)
            {
                var response = new List<string>();
                var badRequestObjectResult = context.Result as BadRequestObjectResult;

                if (badRequestObjectResult.Value is string)
                {
                    response.Add(badRequestObjectResult.Value.ToString());
                }
                else
                {
                    foreach (var key in context.ModelState.Keys)
                    {
                        foreach (var error in context.ModelState[key].Errors)
                        {
                            response.Add($"{key}: {error.ErrorMessage}");
                        }
                    }
                }

                context.Result = new BadRequestObjectResult(response);
            }
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
        }
    }
}
