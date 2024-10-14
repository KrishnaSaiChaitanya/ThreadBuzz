"use client";

import React from "react";
import { api } from "@/trpc/react";
import PostCard from "@/components/cards/post-card";
import { Icons } from "@/components/icons";
import Loading from "@/app/(pages)/loading";
import Error from "@/app/error";
import InfiniteScroll from "react-infinite-scroll-component";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import useDialog from "@/store/dialog";
import CreateWithInput from "@/components/create-with-input";

const HomePage: React.FC = () => {
  const { setOpenDialog } = useDialog();

  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    api.post.getInfinitePost.useInfiniteQuery(
      {},
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        trpc: { abortOnUnmount: true },
        staleTime: 10 * 60 * 1000,
      },
    );

  const allPosts = data?.pages.flatMap((page) => page.posts);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <>
      <div className="hidden w-full sm:flex ">
        <CreateWithInput onClick={() => setOpenDialog(true)} />
      </div>
      <InfiniteScroll
        dataLength={allPosts?.length ?? 0}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        loader={
          <div className="mb-[10vh] flex h-[100px] w-full items-center  justify-center sm:mb-0">
            <Icons.loading className="h-11 w-11" />
          </div>
        }
      >
        <div>
          {allPosts?.map((post, index) => {
            return (
              <div
                key={index}
                className={cn({ "mb-[10vh]": index == allPosts.length - 1 })}
              >
                <PostCard {...post} />
                {index !== allPosts.length - 1 && <Separator />}
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default HomePage;
