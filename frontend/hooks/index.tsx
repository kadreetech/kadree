import { useNextSanityImage } from "next-sanity-image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"
import { MainCustomImageBuilder } from "../components/steps/Step";
import { client } from "../pages";

export const useMediaQueries = () => {
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isLaptop, setIsLaptop] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [isExtraLarge, setIsExtraLarge] = useState<boolean>(false);

  const isTabletQuery = useMediaQuery({
    query: '(min-width: 640px)'
  })
  const isLaptopQuery = useMediaQuery({
    query: '(min-width: 768px)'
  })
  const isDesktopQuery = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const isExtraLargeQuery = useMediaQuery({
    query: '(min-width: 1280px)'
  })

  useEffect(() => {
    setIsTablet(isTabletQuery)
    setIsLaptop(isLaptopQuery)
    setIsDesktop(isDesktopQuery)
    setIsExtraLarge(isExtraLargeQuery)
  }, [isTabletQuery, isLaptopQuery, isDesktopQuery, isExtraLargeQuery])

  return {
    isTablet,
    isLaptop,
    isDesktop,
    isExtraLarge
  }
}


export const useGetImage = (image: any) => {

  const imagePropsBuilder: any = useNextSanityImage(
    client,
    image,
    { imageBuilder: MainCustomImageBuilder }
  );

  return imagePropsBuilder
}