import { useEffect, useState } from "react";

interface linkModel {
  page: number;
  enabled: boolean;
  text: string;
  active: boolean;
}

// ratio is how many pages I want to display on a screen after that page number
interface paginationProps {
  currentPage: number;
  totalAmountOfPages: number;
  radio: number;
  onChange(page: number): void;
}

Pagination.defaultProps = {
  radio: 3,
};

export default function Pagination(props: paginationProps) {
  const [linkModels, setLinkModels] = useState<linkModel[]>([]);

  function selectPage(link: linkModel) {
    // Do nothing if the user click in current page
    if (link.page === props.currentPage) {
      return;
    }

    if (!link.enabled) {
      return;
    }

    // Here we are letting know the parent component that the user clicked in a valid page
    props.onChange(link.page);
  }

  function getClass(link: linkModel) {
    if (link.active) {
      return "active pointer";
    }

    if (!link.enabled) {
      return "disabled";
    }

    return "pointer";
  }

  // I want to run this function inmetiatly after my component loads
  useEffect(() => {
    const previousPageEnabled = props.currentPage !== 1;
    const previousPage = props.currentPage - 1;
    const links: linkModel[] = [];

    links.push({
      text: "Previous",
      enabled: previousPageEnabled,
      page: previousPage,
      active: false,
    });

    // These are the buttons that goes after the previus page
    for (let i = 1; i <= props.totalAmountOfPages; i++) {
      if (
        i >= props.currentPage - props.radio &&
        i <= props.currentPage + props.radio
      ) {
        links.push({
          text: `${i}`,
          active: props.currentPage === i,
          enabled: true,
          page: i,
        });
      }
    }

    const nextPageEnabled =
      props.currentPage !== props.totalAmountOfPages &&
      props.totalAmountOfPages > 0;
    const nextPage = props.currentPage + 1;

    links.push({
      text: "Next",
      page: nextPage,
      enabled: nextPageEnabled,
      active: false,
    });

    setLinkModels(links);
  }, [props.currentPage, props.totalAmountOfPages, props.radio]);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {linkModels.map((link) => (
          <li
            key={link.text}
            onClick={() => selectPage(link)}
            className={`page-item cursor ${getClass(link)}`}
          >
            <span className="page-link">{link.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
