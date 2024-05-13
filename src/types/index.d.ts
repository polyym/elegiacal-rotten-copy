export interface NavItem {
  id: string;
  label: string;
  link: string;
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface CustomCardProps {
  imageUrl: string;
  category: string;
  id: string;
  date: string;
  readTime: string;
  title: string;
  type: string;
  onLikeClick?: () => void;
}
export interface PoemProps {
  imageUrl: string;
 
  id: string;
  date: string;
  readTime: string;
  title: string;
  type: string;
  des: string;
  author: {
    name: string;
    image: string;
  };
  onLikeClick?: () => void;
}

export interface PostProps {
  id: string;
  title: string;
  des: string;
  content: string;
  type: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  timeRead: string;
}
export interface NavBottomProps {
  // setContentType: React.Dispatch<React.SetStateAction<ContentType>>;
  setFilteredPosts: React.Dispatch<React.SetStateAction<PostProps[]>>;
}
