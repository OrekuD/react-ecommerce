import { generateMedia } from "styled-media-query"

export const customMedia = generateMedia({
  smallPhone: "380px",
  largePhone: "450px",
  tablet: "770px",
  smallDesktop: "1024px",
  desktop: "1366px",
  LGdesktop: "1920px",
})
