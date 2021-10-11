import { PostObject } from "./Post";

interface SideBarProps {
  post: PostObject
}

export default function SideBar (props: SideBarProps) {
    
  return <div>
      O post do momento é {props.post.title}
  </div>
}