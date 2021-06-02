import React from "react";
import TorrentCard from "../TorrentCard/TorrentCard";
import classes from "./TorrentContainer.module.css";

const TorrentContainer = (props) => {
  const data = [
    {
      title: ["My Hero Academia - chapter 277-314 (Digital) (anadius)"],
      link: ["https://nyaa.si/download/1392950.torrent"],
      guid: [
        {
          _: "https://nyaa.si/view/1392950",
          $: {
            isPermaLink: "true",
          },
        },
      ],
      pubDate: ["Tue, 01 Jun 2021 08:51:52 -0000"],
      "nyaa:seeders": ["17"],
      "nyaa:leechers": ["3"],
      "nyaa:downloads": ["40"],
      "nyaa:infoHash": ["a04e8b5c18af1640bf432e2147f860268f1a7fc9"],
      "nyaa:categoryId": ["3_1"],
      "nyaa:category": ["Literature - English-translated"],
      "nyaa:size": ["336.2 MiB"],
      "nyaa:comments": ["2"],
      "nyaa:trusted": ["No"],
      "nyaa:remake": ["No"],
      description: [
        '<a href="https://nyaa.si/view/1392950">#1392950 | My Hero Academia - chapter 277-314 (Digital) (anadius)</a> | 336.2 MiB | Literature - English-translated | a04e8b5c18af1640bf432e2147f860268f1a7fc9',
      ],
    },
    {
      title: ["My Hero Academia - chapter 277-314 (Digital) (anadius)"],
      link: ["https://nyaa.si/download/1392950.torrent"],
      guid: [
        {
          _: "https://nyaa.si/view/1392950",
          $: {
            isPermaLink: "true",
          },
        },
      ],
      pubDate: ["Tue, 01 Jun 2021 08:51:52 -0000"],
      "nyaa:seeders": ["17"],
      "nyaa:leechers": ["3"],
      "nyaa:downloads": ["40"],
      "nyaa:infoHash": ["a04e8b5c18af1640bf432e2147f860268f1a7fc9"],
      "nyaa:categoryId": ["3_3"],
      "nyaa:category": ["Literature - English-translated"],
      "nyaa:size": ["336.2 MiB"],
      "nyaa:comments": ["2"],
      "nyaa:trusted": ["Yes"],
      "nyaa:remake": ["No"],
      description: [
        '<a href="https://nyaa.si/view/1392950">#1392950 | My Hero Academia - chapter 277-314 (Digital) (anadius)</a> | 336.2 MiB | Literature - English-translated | a04e8b5c18af1640bf432e2147f860268f1a7fc9',
      ],
    },
  ];
  return (
    <div className={classes.TorrentContainer}>
      <TorrentCard data={data[0]} />
      <TorrentCard data={data[1]} />

    </div>
  );
};
export default TorrentContainer;
