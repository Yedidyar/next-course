import Link from "next/link";

import { Fragment } from "react";
const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News page </h1>
      <ul>
        <li>
          <Link href="/news/NextJs Is great framework">
            NextJs Is great framework
          </Link>
        </li>

        <li>Something Else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
