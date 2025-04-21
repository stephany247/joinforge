import { Icon } from "@iconify/react";

function Header() {
  return (
    <div className="text-lemon-green text-4xl md:text-5xl flex place-content-center md:place-content-end gap-4">
      <Icon icon="hugeicons:instagram" />
      <Icon icon="hugeicons:facebook-01" />
      <Icon icon="hugeicons:new-twitter-rectangle" />
    </div>
  );
}

export default Header;
