export function socialHoverColor(id: string) {
  switch (id) {
    case "github":
      return "group-hover:bg-neutral-900 group-hover:text-white";

    case "linkedin":
      return "group-hover:bg-[#0A66C2] group-hover:text-white";

    case "email":
      return "group-hover:bg-red-500 group-hover:text-white";

    default:
      return "";
  }
}