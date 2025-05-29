declare interface AnchorSubProps {
  key: string;
  title: string;
  href: string;
}

declare interface AnchorItemProps {
  key: string;
  title: string;
  href: string;
  children?: AnchorSubProps[];
}
