"use client";

import React, { useEffect, useState } from "react";
import { Avatar, List } from "antd";
import { apiGetAllPosts } from "@/lib/api/posts";
import { isResponseSuccess } from "@/lib/helpers";
import Link from "next/link";

export default function pagePost() {
  const [dataUserPosts, setDataUserPosts] = useState<IPost[] | undefined>([]);

  const fetchData = async () => {
    try {
      const posts = await apiGetAllPosts();
      if (isResponseSuccess(posts)) {
        setDataUserPosts(posts.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <List
        itemLayout="horizontal"
        dataSource={dataUserPosts}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg`} />
              }
              title={<Link href={`/posts/${item.id}`}>{item.title}</Link>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </section>
  );
}
