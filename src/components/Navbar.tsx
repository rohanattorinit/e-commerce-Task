import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
export const Navbar = (_props: any) => {
  return (
    <nav className="container mx-auto">
      <div className="p-8 flex justify-between">
        <h2 className="text-2xl font-semibold">FakeKart</h2>
        <div className="flex justify-end text-xl font-semibold">
          <p className="p-2">Home</p>
          <p className="p-2">Wishlist</p>
          <LocalMallRoundedIcon />
        </div>
      </div>
    </nav>
  );
};
