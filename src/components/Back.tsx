"use client"
import { useRouter, usePathname } from "next/navigation"

export default function Back() {
  const router = useRouter()
  const pathname = usePathname()

  const goBack = () => {
    if (pathname.includes("/product")) {
      router.replace("/products")
    } else {
      router.back()
    }
  }

  return (
    <div
      onClick={goBack}
      className="
        cursor-pointer 
        w-max 
        flex 
        items-center 
        gap-1.5 
        mb-4 
        lg:mb-0 
        active:scale-95 
        transition-transform 
        select-none
      "
    >
      <svg
        className="w-3 sm:w-4 aspect-square rotate-90"
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="13"
        viewBox="0 0 19 13"
        fill="none"
      >
        <path
          d="M9.50002 12.8333L19 3.33334L16.625 0.958336L9.49998 8.08338L2.37499 0.958386L0 3.33339L9.50002 12.8333Z"
          fill="#000"
          className="transition-all"
        />
      </svg>
      <h3 className="underline leading-none hover:text-primary transition-colors text-sm sm:text-base">
        Back
      </h3>
    </div>
  )
}
