import "./dropDownStyle.css";

function DropdownMenu() {
  return (
    <div className=" dropdown-menu transition-all duration-200 ease-linear border-2 absolute top-12 rounded-md">
      <div className="dropdownItem-boder bg-white p-4 w-20 hover:bg-orange-200">
        fantasy
      </div>
      <div className=" dropdownItem-boder bg-white p-4 hover:bg-orange-200">other</div>
      <div className="dropdownItem-boder bg-white p-4 hover:bg-orange-200">other</div>
      <div className="dropdownItem-boder bg-white p-4 hover:bg-orange-200">other</div>

    </div>
  );
}

export default DropdownMenu;
