import React, { useEffect, useState } from "react";

import AvatarPost from "@/components/avatar-post";
import CoverImage from "@/components/cover-image";
import PostTitle from "@/components/post-title";
import ShareBar from "@/components/sharebar";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  postId,
}) {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1100) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1100) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <AvatarPost
        name={author.name}
        picture={author.picture}
        date={date}
        postId={postId}
      />
      
      <ShareBar showTotal={true} className={isDesktop ? 'vf-share-bar-vertical visible' : 'vf-share-bar-vertical invisible'} />

      <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />

      <ShareBar showTotal={true} className={!isDesktop ? 'vf-share-bar-horizontal visible' : 'vf-share-bar-horizontal invisible'} />

    </>
  );
}
