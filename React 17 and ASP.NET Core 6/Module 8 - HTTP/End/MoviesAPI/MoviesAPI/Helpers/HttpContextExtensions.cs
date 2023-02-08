using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Helpers
{
    public static class HttpContextExtensions
    {
        public async static Task InsertParametersPaginationInHeader<T>(this HttpContext httpContext,
            IQueryable<T> queryable)
        {
            if (httpContext == null) { throw new ArgumentNullException(nameof(httpContext)); }

            double count = await queryable.CountAsync();
            // We are putting in the header of the response of the http request, the total amount of records
            // for our table, in that way the client would be able to access this information.
            // We need to configure this in the Startup.cs, so cors allows me to get this information from the client's web browser
            httpContext.Response.Headers.Add("totalAmountOfRecords", count.ToString());
        }
    }
}
