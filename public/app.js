(()=>{'use strict';
const ICONS={"grid":{"w":512,"h":512,"d":["M448 96l0 128-160 0 0-128 160 0zm0 192l0 128-160 0 0-128 160 0zM224 224L64 224 64 96l160 0 0 128zM64 288l160 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},"cells":{"w":512,"h":512,"d":["M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},"sync":{"w":512,"h":512,"d":["M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},"user":{"w":448,"h":512,"d":["M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},"help":{"w":512,"h":512,"d":["M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},"calc":{"w":384,"h":512,"d":["M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 64l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"]},"shield":{"w":512,"h":512,"d":["M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},"lock":{"w":448,"h":512,"d":["M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},"truck":{"w":640,"h":512,"d":["M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]},"warehouse":{"w":640,"h":512,"d":["M0 488L0 171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4L640 488c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-264c0-17.7-14.3-32-32-32l-384 0c-17.7 0-32 14.3-32 32l0 264c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24l0-56 384 0 0 56c0 13.3-10.7 24-24 24zM128 400l0-64 384 0 0 64-384 0zm0-96l0-80 384 0 0 80-384 0z"]},"clock":{"w":512,"h":512,"d":["M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},"boxes":{"w":576,"h":512,"d":["M248 0L208 0c-26.5 0-48 21.5-48 48l0 112c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-112c0-26.5-21.5-48-48-48L328 0l0 80c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-80zM64 256c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-40 0 0 80c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-80-40 0zM352 512l160 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-40 0 0 80c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-80-40 0c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2l0 160c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"]},"plus":{"w":448,"h":512,"d":["M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},"minus":{"w":448,"h":512,"d":["M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},"x":{"w":384,"h":512,"d":["M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},"info":{"w":512,"h":512,"d":["M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},"download":{"w":512,"h":512,"d":["M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},"check":{"w":448,"h":512,"d":["M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},"chev":{"w":512,"h":512,"d":["M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},"mail":{"w":512,"h":512,"d":["M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},"phone":{"w":512,"h":512,"d":["M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},"fire":{"w":448,"h":512,"d":["M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},"arrow":{"w":448,"h":512,"d":["M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},"users":{"w":640,"h":512,"d":["M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]},"bars":{"w":448,"h":512,"d":["M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},"coins":{"w":512,"h":512,"d":["M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"]},"hourglass":{"w":384,"h":512,"d":["M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 256 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 0 64 0 32 0zM96 75l0-11 192 0 0 11c0 19-5.6 37.4-16 53L112 128c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9L112 384z"]},"cart":{"w":576,"h":512,"d":["M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},"eye":{"w":576,"h":512,"d":["M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},"trash":{"w":448,"h":512,"d":["M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},"cap":{"w":512,"h":512,"d":["M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},"link":{"w":640,"h":512,"d":["M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},"copy":{"w":448,"h":512,"d":["M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},"userplus":{"w":640,"h":512,"d":["M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},"map":{"w":576,"h":512,"d":["M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},"leaf":{"w":512,"h":512,"d":["M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]},"gear":{"w":512,"h":512,"d":["M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},"sitemap":{"w":576,"h":512,"d":["M208 80c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-8 0 0 40 152 0c30.9 0 56 25.1 56 56l0 32 8 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l8 0 0-32c0-4.4-3.6-8-8-8l-152 0 0 40 8 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l8 0 0-40-152 0c-4.4 0-8 3.6-8 8l0 32 8 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l8 0 0-32c0-30.9 25.1-56 56-56l152 0 0-40-8 0c-26.5 0-48-21.5-48-48l0-64z"]},"chartpie":{"w":576,"h":512,"d":["M304 240l0-223.4c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16L304 240zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4L256 288 412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288l238.4 0z"]}};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ic=(n,sz=20,cls='')=>{const i=ICONS[n];if(!i)return'';const m=Math.max(i.w,i.h);return `<svg class="ic ${cls}" viewBox="0 0 ${i.w} ${i.h}" width="${(sz*i.w/m).toFixed(1)}" height="${(sz*i.h/m).toFixed(1)}" aria-hidden="true">${i.d.map(p=>`<path d="${p}" fill="currentColor"/>`).join('')}</svg>`};
const nf=new Intl.NumberFormat('fr-FR');
const eur=n=>nf.format(Math.round(n))+'\u00a0€';
const eur2=n=>new Intl.NumberFormat('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n)+'\u00a0€';
const sgn=n=>(n>0?'+':n<0?'−':'')+eur(Math.abs(n));
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const CONTACT={mail:'perobert@magicpallet.com',tel:'06 62 40 43 40'};

/* ---------- Grille indicative (à valider) ---------- */
const CFG={
  reloc:[[25000,1.20],[75000,1.15],[200000,1.09],[400000,1.05],[Infinity,1.00]],
  logiciel:[[1,200],[3,400],[10,700],[Infinity,1000]],
  conso:[[25000,200],[75000,250],[200000,300],[400000,500],[800000,750],[Infinity,1000]],
  moyenneGestion:1.30,seuil:495,pallPerPair:247
};
const tier=(t,x)=>t.find(r=>x<=r[0])[1];
const DEF={volume:120000,sites:2,transporteurs:3,entrepots:5,gestionUnknown:true,gestion:1.30,heures:12,stockAuto:true,stock:0,urgence:0,perdues:0,valPal:8,tauxHoraire:45,taux:8};
const FIELDS={volume:['Palettes livrées chez Carrefour / an',v=>nf.format(v)],sites:['Sites d’expédition',v=>v],transporteurs:['Transporteurs',v=>v],entrepots:['Entrepôts Carrefour livrés',v=>v],
 gestion:['Gestion palettes facturée (€ HT / palette)',v=>eur2(v)],gestionUnknown:['Ne connaît pas son coût gestion palettes',v=>v?'oui (moyenne 1,30 €)':'non'],heures:['Heures de suivi / mois',v=>v+' h'],
 stock:['Palettes immobilisées',v=>nf.format(v)],urgence:['Palettes achetées en urgence / an',v=>nf.format(v)],perdues:['Palettes non récupérées',v=>v+' %'],
 valPal:['Valeur d’une palette EUR',v=>eur2(v)],tauxHoraire:['Coût horaire chargé',v=>eur2(v)],taux:['Coût du capital',v=>v+' %']};
const estStock=s=>Math.round(Math.min(s.transporteurs*s.entrepots*CFG.pallPerPair,s.volume*0.15));
function calc(s){
  const V=Math.max(0,+s.volume||0),g=s.gestionUnknown?CFG.moyenneGestion:(+s.gestion||0);
  const stock=s.stockAuto?estStock(s):(+s.stock||0);
  const it={gestion:V*g,temps:(+s.heures||0)*12*(+s.tauxHoraire||0),stock:stock*(+s.valPal||0)*((+s.taux||0)/100),urgence:(+s.urgence||0)*(+s.valPal||0),perdues:V*((+s.perdues||0)/100)*(+s.valPal||0)};
  const total=Object.values(it).reduce((a,b)=>a+b,0);
  const unit=tier(CFG.reloc,V),mp={reloc:V*unit,logiciel:12*tier(CFG.logiciel,+s.sites||1),conso:12*tier(CFG.conso,V),unit};
  mp.total=mp.reloc+mp.logiciel+mp.conso;
  const other=total-it.gestion,net=total-mp.total;
  const seuil=V>0?(mp.total-other)/V:0;
  return{g,stock,it,total,mp,net,perPal:V?net/V:0,pct:total?net/total*100:0,seuil,other,V,netAt:x=>V*x+other-mp.total};
}

/* ---------- état local ---------- */
const LS='mp-simulateur-v1';
let S=Object.assign({},DEF),PROFILE=null,WELCOME_PENDING=false;
try{const r=JSON.parse(localStorage.getItem(LS)||'null');if(r&&r.state)S=Object.assign({},DEF,r.state)}catch(e){}
const saveLocal=()=>{try{localStorage.setItem(LS,JSON.stringify({state:S}))}catch(e){}};

/* ---------- modules verrouillés ---------- */
const MODS={
 dashboard:{g:'Piloter',n:'Tableau de bord',i:'grid',p:'Votre parc de supports en un coup d’œil',pts:['Stock global et par site, mis à jour en continu','Contestations et alertes à traiter, classées par priorité','Courbes par entrepôt ou magasin, exportables en un clic'],m:'dash'},
 gestion:{g:'Piloter',n:'Gérer mes flux et soldes',s:'Mes flux et soldes',i:'cells',p:'Déclarez, pointez, contestez : sans papier',pts:['Déclaration des flux : saisie, import Excel ou connexion à votre TMS, WMS ou ERP','Pointages et contestations avec photo et CMR','Suivi de chaque solde, partenaire par partenaire'],m:'list'},
 stocks:{g:'Piloter',n:'Gérer mes stocks',s:'Mes stocks',i:'boxes',p:'Vos supports, site par site, en temps réel',pts:['Stock global et par site, par type de support','Alertes dès qu’un seuil est franchi','Évolution dans le temps, exportable en un clic'],m:'bars'},
 relocalisation:{g:'Piloter',n:'Approvisionner mes sites',s:'Mes approvisionnements',i:'truck',p:'Vos palettes EUR reviennent là où vous en avez besoin',pts:['Pilotez la récupération de vos palettes EUR sur chacun de vos sites, au fil de vos livraisons chez vos clients','Choisissez le site, la quantité et le moment : tout s’automatise selon vos règles'],hl:{t:'Process Carrefour',p:'Dès que 495 palettes EUR ont été expédiées chez Carrefour, tous entrepôts confondus, une livraison de 495 palettes EUR est programmée sur le site de votre choix.'},m:'list'},
 carte:{g:'Piloter',n:'Voir mes données sur une carte',s:'Ma carte',i:'map',p:'Vos sites et vos flux, là où ils se trouvent',pts:['Sites, entrepôts et partenaires sur une seule carte','Stocks et flux visualisés lieu par lieu','Zoom par région ou par regroupement'],m:'map'},
 couts:{g:'Mesurer',n:'Gérer mes coûts et mes économies',s:'Mes coûts et économies',i:'chartpie',p:'Ce que coûtent vos palettes, et ce que vous économisez',pts:['Coûts de gestion, d’achat et de relocalisation réunis','Économies mesurées sur vos propres flux','Suivi par période et par site'],m:'bars'},
 carbone:{g:'Mesurer',n:'Mon bilan carbone',i:'leaf',p:'Le CO₂ que vos palettes vous font gagner',pts:['CO₂ évité grâce aux palettes vides qui ne roulent plus','Taux de réemploi par type de support et par site','Données prêtes à intégrer à votre bilan carbone'],m:'bars'},
 compte:{g:'Administrer',n:'Mon organisation',i:'sitemap',p:'Votre organisation, telle que vous la pensez',pts:['Dessinez vos établissements, leur arborescence et vos regroupements','Choisissez vos niveaux de consolidation des données','Définissez vos utilisateurs et leurs privilèges','Appliquez vos propres règles de gestion, selon vos pratiques'],m:'tree'},
 parametres:{g:'Administrer',n:'Mes paramètres',i:'gear',p:'Réglez la plateforme sur vos habitudes',pts:['Seuils et alertes par site ou par support','Rapports et notifications automatiques','Imports et connexions à vos outils (TMS, WMS, ERP, API)'],m:'list'},
 aides:{g:'Administrer',n:'Aides',i:'help',p:'Tout pour démarrer vite',pts:['Guides pas à pas et documentation','Documentation de l’API pour vos équipes informatiques','Contact direct avec l’équipe MagicPallet'],m:'list'}
};
const PAGES={simuler:'Simuler mes économies',suivi:'Suivi des prospects'};

/* ---------- suivi (envoi au serveur) ---------- */
const ADMIN=document.body.dataset.admin==='1',isAdmin=ADMIN;
const uuid=()=>crypto.randomUUID?crypto.randomUUID():'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c==='x'?r:(r&3|8)).toString(16)});
const Tr={sid:uuid(),queue:[],active:0,hold:false,
 log(type,data){if(ADMIN)return;this.queue.push(Object.assign({t:Date.now(),type},data||{}));if(this.queue.length>200)this.queue.shift()},
 flush(final){
  if(ADMIN||!PROFILE||this.hold||(!this.queue.length&&!this.active))return;
  const evs=this.queue.splice(0,100),active=this.active,body=JSON.stringify({visit:this.sid,events:evs,active});this.active=0;
  try{if(final&&navigator.sendBeacon){navigator.sendBeacon('/api/track',new Blob([body],{type:'application/json'}));return}}catch(e){}
  fetch('/api/track',{method:'POST',headers:{'Content-Type':'application/json'},body,keepalive:true,credentials:'same-origin'})
   .then(r=>{if(r.status>=500){this.queue.unshift(...evs);this.active+=active}}).catch(()=>{this.queue.unshift(...evs);this.active+=active});
 }};
let lastAct=Date.now();
['pointerdown','keydown','scroll','input'].forEach(e=>addEventListener(e,()=>{lastAct=Date.now()},{passive:true,capture:true}));
setInterval(()=>{if(!document.hidden&&Date.now()-lastAct<45000)Tr.active+=5},5000);
setInterval(()=>Tr.flush(),10000);
document.addEventListener('visibilitychange',()=>{if(document.hidden)Tr.flush(true)});addEventListener('pagehide',()=>Tr.flush(true));

/* ---------- navigation ---------- */
const route=()=>{const h=(location.hash||'').slice(1);if(!h&&ADMIN)return'suivi';return PAGES[h]&&(h!=='suivi'||isAdmin)?h:'simuler'};
function renderNav(){
  const cur=route();let h=`<button class="${cur==='simuler'?'on':''}" data-go="simuler">${ic('calc',20)}<span class="tx">Simuler mes économies</span></button>`;
  let lg='';for(const [k,m] of Object.entries(MODS)){if(m.g!==lg){lg=m.g;h+=`<div class="gl">${esc(lg)}</div>`}h+=`<button data-lock="${k}" title="Réservé aux clients" aria-label="${esc(m.n)} (réservé aux clients)">${ic(m.i,20)}<span class="tx">${esc(m.s||m.n)}</span><span class="lk">${ic('lock',13)}</span></button>`}
  if(isAdmin)h+=`<div class="sep"></div><div class="gl">Administration</div><button class="${cur==='suivi'?'on':''}" data-go="suivi">${ic('shield',22)}<span>Suivi des prospects</span></button>`;
  $('#nav').innerHTML=h;
  $('#b-side-contact').innerHTML=ic('mail',16)+'<span class="tx">Parler à un expert</span>';
  $('#hb').innerHTML=ic('bars',22);$('#tb-info').innerHTML=ic('info',22);
  $('#who').textContent=PROFILE&&PROFILE.company?'Espace découverte · '+PROFILE.company:'Espace découverte';
}
function go(p){if(location.hash==='#'+p)render();else location.hash=p}
function render(){
  clearInterval(BO.poll);
  const p=route();renderNav();closeDrawer();$('#side').classList.remove('on');
  Tr.log('page_view',{page:p});
  if(p==='suivi')viewAdmin();else viewSim();
  scrollTo(0,0);
}
addEventListener('hashchange',render);

/* ---------- simulateur ---------- */
const cardStep=(k,t,d,icon,min,max)=>`<div class="card"><div class="ch"><span class="bd">${ic(icon,18)}</span><div><h3>${t}</h3><p>${d}</p></div></div><div class="stp"><button type="button" data-step="${k}" data-d="-1" aria-label="Diminuer">${ic('minus',14)}</button><div class="inp"><input data-k="${k}" type="number" min="${min}" max="${max}" step="1" inputmode="numeric" aria-label="${t}"></div><button type="button" data-step="${k}" data-d="1" aria-label="Augmenter">${ic('plus',14)}</button></div></div>`;
function viewSim(){
  $('#view').innerHTML=`
  <div class="hero-t"><h1>Simuler mes économies</h1><p class="lead">Vos chiffres, notre grille. Si le gain n’est pas au rendez-vous, le simulateur vous le dit.</p></div>
  <div class="sim"><div>
    <section class="panel"><h2>Vos flux vers Carrefour</h2><div class="cards">
      <div class="card span3"><div class="ch"><span class="bd">${ic('boxes',18)}</span><div><h3>Palettes EUR livrées chez Carrefour</h3><p>Par an, tous entrepôts confondus</p></div></div>
        <div class="inp"><input id="in-volume" data-k="volume" type="number" min="1000" step="1000" inputmode="numeric" aria-label="Palettes livrées par an"><span>palettes / an</span></div>
        <input id="rg-volume" type="range" min="0" max="100" step="0.5" aria-label="Volume annuel (échelle logarithmique)"><div class="hint" id="h-volume"></div></div>
      ${cardStep('sites','Sites d’expédition','Fixe votre tranche d’abonnement','warehouse',1,60)}
      ${cardStep('transporteurs','Transporteurs','Ceux qui rapatrient vos palettes','truck',1,60)}
      ${cardStep('entrepots','Entrepôts livrés','Où se cumulent vos soldes','boxes',1,80)}
    </div></section>
    <section class="panel"><h2>Ce que cela vous coûte aujourd’hui</h2><div class="cards two">
      <div class="card span3"><div class="ch"><span class="bd">${ic('coins',18)}</span><div><h3>Gestion palettes facturée par vos transporteurs</h3><p>La ligne « gestion palettes » de leurs factures de transport</p></div></div>
        <div class="inp" id="w-gestion"><input data-k="gestion" type="number" min="0" step="0.05" inputmode="decimal" aria-label="Coût de gestion palettes par palette"><span>€ HT / palette</span></div>
        <label class="chk"><input type="checkbox" data-k="gestionUnknown"><span>Je ne connais pas ce chiffre : utiliser la moyenne observée, 1,30 € (de 1 € à plus de 2 € selon les transporteurs)</span></label><span class="chip" id="c-gestion"></span></div>
      <div class="card"><div class="ch"><span class="bd">${ic('clock',18)}</span><div><h3>Temps passé à suivre les soldes et à relancer</h3><p>Rapprochements, e-mails et appels aux transporteurs, bons à récupérer</p></div></div>
        <div class="inp"><input data-k="heures" type="number" min="0" step="1" inputmode="numeric" aria-label="Heures par mois"><span>heures / mois</span></div><span class="chip" id="c-temps"></span></div>
      <div class="card"><div class="ch"><span class="bd">${ic('hourglass',18)}</span><div><h3>Stock de palettes immobilisé en avance</h3><p>Vos transporteurs doivent cumuler 495 palettes par entrepôt avant de vous les rendre : vous gardez un stock tampon</p></div></div>
        <div class="row2"><div class="inp" id="w-stock"><input data-k="stock" type="number" min="0" step="50" inputmode="numeric" aria-label="Palettes immobilisées"><span>palettes</span></div><button class="btn ghost sm" type="button" id="b-est">Estimer pour moi</button></div><span class="chip" id="c-stock"></span></div>
      <div class="card"><div class="ch"><span class="bd">${ic('cart',18)}</span><div><h3>Achats de palettes en urgence</h3><p>Quand les retours tardent et que vous rachetez pour expédier. Laissez 0 s’il n’y en a pas.</p></div></div>
        <div class="inp"><input data-k="urgence" type="number" min="0" step="10" inputmode="numeric" aria-label="Palettes achetées en urgence par an"><span>palettes / an</span></div><span class="chip" id="c-urgence"></span></div>
      <div class="card"><div class="ch"><span class="bd">${ic('boxes',18)}</span><div><h3>Palettes jamais récupérées</h3><p>Part des palettes livrées que vos transporteurs ne vous rendent jamais</p></div></div>
        <div class="inp"><input data-k="perdues" type="number" min="0" max="100" step="0.5" inputmode="decimal" aria-label="Pourcentage de palettes non récupérées"><span>% des palettes</span></div><span class="chip" id="c-perdues"></span></div>
    </div>
    <details class="adv" id="adv"><summary>${ic('chev',14)}<span>Hypothèses avancées</span></summary><div class="g3">
      <label>Valeur d’une palette EUR (€)<div class="inp"><input data-k="valPal" type="number" min="0" step="0.5" inputmode="decimal"></div></label>
      <label>Coût horaire chargé (€)<div class="inp"><input data-k="tauxHoraire" type="number" min="0" step="1" inputmode="decimal"></div></label>
      <label>Coût du capital (% / an)<div class="inp"><input data-k="taux" type="number" min="0" max="100" step="0.5" inputmode="decimal"></div></label></div></details></section>
  </div>
  <aside class="sim-out"><div class="res" id="res">
    <div class="res-hero"><span class="k">Gain net estimé par an</span><strong id="r-net">–</strong><span class="sub" id="r-sub"></span></div>
    <div class="res-body">
      <div class="msg" id="r-msg"></div>
      <div><h4>Où vous vous situez</h4><div class="gauge" id="gauge"><span class="mk thr" id="mk-thr"><b id="t-thr"></b></span><span class="mk you" id="mk-you"><b id="t-you"></b></span></div><div class="gauge-sc"><span>0,50 €</span><span>2,50 € par palette</span></div></div>
      <div class="bars"><h4>Coûts annuels comparés</h4>
        <div><div class="bar-l"><span>Aujourd’hui</span><b id="bt-t"></b></div><div class="bar" id="bar-t"></div></div>
        <div><div class="bar-l"><span>Avec MagicPallet</span><b id="bt-m"></b></div><div class="bar" id="bar-m"></div></div>
        <div class="lg" id="lg"></div></div>
      <div><h4>Et si vos transporteurs facturaient…</h4><table class="sens" id="sens"></table></div>
      <div class="acts"><button class="btn primary" id="b-contact">${ic('phone',16)}<span>Faire valider avec un expert</span></button><button class="btn ghost" id="b-export">${ic('download',16)}<span>Enregistrer ma simulation</span></button></div>
      <p class="fine">Estimation indicative fondée sur vos hypothèses et sur notre grille tarifaire en vigueur. Elle ne constitue pas une proposition ferme.</p>
    </div></div></aside></div>`;
  bindSim();syncInputs();update();
}
let lastTracked={},simTimer=null,userTouched=false;
function bindSim(){
  $$('#view [data-k]').forEach(el=>{
    const k=el.dataset.k;
    el.addEventListener('input',()=>{
      if(k==='stock')S.stockAuto=false;
      S[k]=el.type==='checkbox'?el.checked:(el.value===''?0:parseFloat(el.value));
      if(k==='volume')syncVolume();userTouched=true;update(k);
    });
    el.addEventListener('change',()=>{
      const to=S[k],from=lastTracked[k];
      if(from!==to){Tr.log('input_change',{k,from,to});lastTracked[k]=to}
    });
  });
  const rg=$('#rg-volume');
  rg.addEventListener('input',()=>{const v=1000*Math.pow(1000,rg.value/100);S.volume=v<50000?Math.round(v/500)*500:Math.round(v/5000)*5000;$('#in-volume').value=S.volume;userTouched=true;update('volume');updHint()});
  rg.addEventListener('change',()=>{if(lastTracked.volume!==S.volume){Tr.log('input_change',{k:'volume',from:lastTracked.volume,to:S.volume});lastTracked.volume=S.volume}});
  $$('#view [data-step]').forEach(b=>b.addEventListener('click',()=>{
    const k=b.dataset.step,inp=$(`[data-k="${k}"]`),n=clamp((+S[k]||0)+(+b.dataset.d),+inp.min,+inp.max);
    S[k]=n;inp.value=n;userTouched=true;update(k);if(lastTracked[k]!==n){Tr.log('input_change',{k,from:lastTracked[k],to:n});lastTracked[k]=n}}));
  $('#b-est').addEventListener('click',()=>{S.stockAuto=true;Tr.log('stock_estimate',{value:estStock(S)});syncInputs();userTouched=true;update('stock')});
  $('#adv').addEventListener('toggle',e=>{if($('#adv').open)Tr.log('advanced_open')});
  $('#b-contact').addEventListener('click',()=>openContact('simulation'));
  $('#b-export').addEventListener('click',exportCsv);
}
function syncInputs(){
  $$('#view [data-k]').forEach(el=>{const k=el.dataset.k;if(k==='stock'&&S.stockAuto)el.value=estStock(S);else if(el.type==='checkbox')el.checked=!!S[k];else el.value=S[k];if(lastTracked[k]===undefined)lastTracked[k]=S[k]});
  const v=$('#rg-volume');if(v)syncVolume();
}
function syncVolume(){$('#rg-volume').value=clamp(100*Math.log10(Math.max(1000,S.volume)/1000)/3,0,100);updHint()}
function updHint(){$('#h-volume').textContent=`Soit environ ${nf.format(Math.round(S.volume/12))} palettes par mois, ou ${(S.volume/CFG.seuil).toFixed(1).replace('.',',')} complets de ${CFG.seuil} palettes par an.`}
function update(k){
  if(k==='transporteurs'||k==='entrepots'||k==='volume'){if(S.stockAuto)$('[data-k="stock"]').value=estStock(S)}
  $('#w-gestion').classList.toggle('dis',!!S.gestionUnknown);$('[data-k="gestion"]').disabled=!!S.gestionUnknown;
  if(S.gestionUnknown)$('[data-k="gestion"]').value=CFG.moyenneGestion;
  const r=calc(S);saveLocal();
  $('#c-gestion').textContent=`= ${eur(r.it.gestion)} par an`;
  $('#c-temps').textContent=`= ${eur(r.it.temps)} par an`;
  $('#c-stock').textContent=`= ${eur(r.it.stock)} par an de coût d’immobilisation`;
  $('#c-urgence').textContent=`= ${eur(r.it.urgence)} par an`;
  $('#c-perdues').textContent=`= ${eur(r.it.perdues)} par an`;
  const net=$('#r-net');net.textContent=sgn(r.net);net.classList.toggle('neg',r.net<0);
  $('#r-sub').textContent=r.V?`soit ${r.perPal>=0?'+':'−'}${eur2(Math.abs(r.perPal))} par palette · ${r.pct>=0?'':'−'}${Math.abs(r.pct).toFixed(0)} % de vos coûts actuels`:'';
  const msg=$('#r-msg');msg.classList.toggle('neg',r.net<=0);
  if(r.net>0)msg.innerHTML=r.seuil<=0.5?`Sur ces hypothèses, vous restez gagnant quel que soit le coût de gestion facturé par vos transporteurs.`:`Vous restez gagnant tant que vos transporteurs facturent plus de <b>${eur2(r.seuil)}</b> par palette.`;
  else msg.innerHTML=`Sur ces hypothèses, le gain n’apparaît pas. Il faudrait que la gestion palettes facturée dépasse <b>${eur2(r.seuil)}</b> par palette, ou que les autres postes (achats d’urgence, palettes non récupérées, temps de suivi) pèsent plus que ce que vous avez saisi. Vérifiez ces postes avant de conclure.`;
  const lo=0.5,hi=2.5,pc=x=>clamp((x-lo)/(hi-lo),0,1)*100;
  $('#gauge').style.setProperty('--sp',pc(r.seuil)+'%');$('#mk-thr').style.left=pc(r.seuil)+'%';$('#mk-you').style.left=pc(r.g)+'%';
  $('#t-thr').textContent=r.seuil<=lo?`Seuil < ${eur2(lo)}`:r.seuil>=hi?`Seuil > ${eur2(hi)}`:`Seuil ${eur2(r.seuil)}`;$('#t-you').textContent=`Vous : ${eur2(r.g)}`;
  const mx=Math.max(r.total,r.mp.total,1),seg=(vals,cls)=>vals.map((v,i)=>`<i style="width:${v/mx*100}%;background:var(${cls[i]})"></i>`).join('');
  $('#bar-t').innerHTML=seg([r.it.gestion,r.it.temps,r.it.stock,r.it.urgence,r.it.perdues],['--s1','--s2','--s3','--s4','--s5']);
  $('#bar-m').innerHTML=seg([r.mp.reloc,r.mp.logiciel,r.mp.conso],['--mint','--mint','--mint']);
  const bm=$('#bar-m').children;if(bm[1])bm[1].style.opacity='.7';if(bm[2])bm[2].style.opacity='.45';
  $('#bt-t').textContent=eur(r.total);$('#bt-m').textContent=eur(r.mp.total);
  const row=(c,n,v)=>`<span class="n" style="--c:${c}">${n}</span><span class="v">${eur(v)}</span>`;
  $('#lg').innerHTML=[row('var(--s1)','Gestion palettes',r.it.gestion),row('var(--s2)','Temps de suivi',r.it.temps),row('var(--s3)','Stock immobilisé',r.it.stock),row('var(--s4)','Achats d’urgence',r.it.urgence),row('var(--s5)','Palettes non récupérées',r.it.perdues),
    row('var(--mint)',`Relocalisation (${eur2(r.mp.unit)} / palette)`,r.mp.reloc),row('var(--mint)','Logiciel (abonnement annuel)',r.mp.logiciel),row('var(--mint)','Consolidation du solde (annuel)',r.mp.conso)].join('');
  $('#sens').innerHTML=[1.0,1.3,2.0].map(x=>{const n=r.netAt(x);return `<tr><td>${eur2(x)} par palette</td><td class="${n>=0?'pos':'neg'}">${sgn(n)} par an</td></tr>`}).join('');
  if(userTouched){clearTimeout(simTimer);simTimer=setTimeout(()=>{const c=calc(S);
    Tr.log('simulation',{inputs:Object.assign({},S,{stock:c.stock}),net:Math.round(c.net),total:Math.round(c.total),mpTotal:Math.round(c.mp.total),seuil:+c.seuil.toFixed(2)});userTouched=false},1800)}
}
function csvEsc(v){v=String(v);return /[;"\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v}
async function exportCsv(){
  const r=calc(S),rows=[['Paramètre','Valeur']];
  for(const k of ['volume','sites','transporteurs','entrepots','gestion','heures','stock','urgence','perdues','valPal','tauxHoraire','taux']){const v=k==='stock'?r.stock:k==='gestion'?r.g:S[k];rows.push([FIELDS[k][0],v])}
  rows.push([],['Résultat','Montant annuel (€)'],['Gestion palettes facturée',Math.round(r.it.gestion)],['Temps de suivi',Math.round(r.it.temps)],['Stock immobilisé',Math.round(r.it.stock)],['Achats d’urgence',Math.round(r.it.urgence)],['Palettes non récupérées',Math.round(r.it.perdues)],['Total coûts actuels',Math.round(r.total)],
   ['Relocalisation MagicPallet',Math.round(r.mp.reloc)],['Logiciel MagicPallet',Math.round(r.mp.logiciel)],['Consolidation MagicPallet',Math.round(r.mp.conso)],['Total MagicPallet',Math.round(r.mp.total)],['Gain net estimé',Math.round(r.net)],['Seuil de rentabilité (€ / palette)',r.seuil.toFixed(2)]);
  Tr.log('export');
  try{const blob=new Blob(['\ufeff'+rows.map(x=>x.map(csvEsc).join(';')).join('\n')],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='simulation-magicpallet.csv';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),2000);toast('Simulation enregistrée')}catch(e){toast('Enregistrement indisponible')}
}

/* ---------- tiroir, modales ---------- */
function mock(kind){
  if(kind==='dash')return `<div class="in"><div class="k3"><div></div><div></div><div></div></div><div class="ln"><svg viewBox="0 0 300 84" preserveAspectRatio="none"><polyline fill="none" stroke="#3CDAB9" stroke-width="3" points="0,70 40,60 80,64 120,40 160,46 200,26 240,30 300,8"/><polyline fill="none" stroke="#3B49C9" stroke-width="3" points="0,76 50,70 100,72 150,58 200,60 250,48 300,40"/></svg></div></div>`;
  if(kind==='bars')return `<div class="in"><div class="k3"><div></div><div></div><div></div></div><div class="ln bars-m">${[40,62,48,78,56,90,70].map(h=>`<i style="height:${h}%"></i>`).join('')}</div></div>`;
  if(kind==='map')return `<div class="in"><div class="ln map-m">${[[18,30],[34,62],[47,38],[58,70],[70,28],[82,56],[26,78]].map(p=>`<i style="left:${p[0]}%;top:${p[1]}%"></i>`).join('')}</div><div class="rw"></div></div>`;
  if(kind==='tree')return `<div class="in">${[0,18,36,36,18,36].map(m=>`<div class="rw" style="margin-left:${m}px;height:28px"></div>`).join('')}</div>`;
  return `<div class="in"><div class="rw"></div><div class="rw"></div><div class="rw"></div><div class="rw"></div></div>`;
}
function openDrawer(html){$('#drawer').innerHTML=`<button class="x" id="dx" aria-label="Fermer">${ic('x',18)}</button>${html}`;$('#drawer').classList.add('on');$('#scrim').classList.add('on');$('#dx').addEventListener('click',closeDrawer);$('#dx').focus()}
function closeDrawer(){$('#drawer').classList.remove('on');if(!$('#modal').classList.contains('on'))$('#scrim').classList.remove('on')}
function openTeaser(k){
  const m=MODS[k];Tr.log('locked_click',{module:k});
  openDrawer(`<span class="tag">${ic('lock',12)}Réservé aux clients</span><h2>${esc(m.n)}</h2><p style="margin:0;font-size:17px;color:var(--muted)">${esc(m.p)}</p>
   <ul>${m.pts.map(p=>`<li>${ic('check',14)}<span>${esc(p)}</span></li>`).join('')}</ul>
   ${m.hl?`<div class="hl">${ic('truck',20)}<div><b>${esc(m.hl.t)}</b><span>${esc(m.hl.p)}</span></div></div>`:''}
   <div class="mock">${mock(m.m)}<div class="lock"><span>${ic('lock',14)}Activé avec votre compte client</span></div></div>
   <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto"><button class="btn primary" id="td-demo">${ic('eye',16)}<span>Voir ce module en démonstration</span></button><button class="btn ghost" id="td-back">Retour au simulateur</button></div>`);
  $('#td-demo').addEventListener('click',()=>{Tr.log('teaser_cta',{module:k});closeDrawer();openContact(k)});
  $('#td-back').addEventListener('click',()=>{closeDrawer();go('simuler')});
}
function openModal(html){$('#modal').innerHTML=`<div class="mbox">${html}</div>`;$('#modal').classList.add('on');$('#scrim').classList.add('on');const f=$('#modal input,#modal textarea');if(f)f.focus()}
function closeModal(){$('#modal').classList.remove('on');if(!$('#drawer').classList.contains('on'))$('#scrim').classList.remove('on')}
function openWelcome(){
  const p=PROFILE||{};
  openModal(`<h2>${p.first?'Bonjour '+esc(p.first)+', bienvenue':'Bienvenue'} dans votre espace découverte</h2><p>Une rubrique est ouverte pour vous : <b>Simuler mes économies</b>. Le reste de la plateforme s’active avec votre compte client.</p>
  <form id="f-w" style="display:flex;flex-direction:column;gap:12px"><div class="g2"><label>Prénom<div class="inp"><input name="first" required autocomplete="given-name" value="${esc(p.first||'')}"></div></label><label>Nom<div class="inp"><input name="last" autocomplete="family-name" value="${esc(p.last||'')}"></div></label></div>
  <label>Société<div class="inp"><input name="company" required autocomplete="organization" value="${esc(p.company||'')}"></div></label><label>E-mail professionnel<div class="inp"><input name="email" type="email" autocomplete="email" value="${esc(p.email||'')}"></div></label>
  <button class="btn primary" type="submit">Accéder au simulateur</button><p class="legal">MagicPallet conserve vos saisies et les pages consultées dans cet espace afin de préparer votre étude chiffrée. Vous pouvez demander leur suppression à ${CONTACT.mail}.</p></form>`);
  $('#f-w').addEventListener('submit',async e=>{e.preventDefault();const f=new FormData(e.target);
    const body={first:f.get('first'),last:f.get('last'),company:f.get('company'),email:f.get('email')};
    try{const r=await fetch('/api/profile',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),credentials:'same-origin'});if(!r.ok)throw 0;
      PROFILE=(await r.json()).profile;WELCOME_PENDING=false;Tr.hold=false;closeModal();renderNav();Tr.log('profile_set');Tr.flush()}catch(err){toast('Enregistrement impossible, réessayez')}});
}
function openContact(ctx){
  const lbl=MODS[ctx]?`Démonstration du module « ${MODS[ctx].n} »`:'Faire valider ma simulation';Tr.log('contact_open',{ctx});
  openModal(`<button class="x" style="all:unset;cursor:pointer;position:absolute;top:16px;right:16px;padding:8px;color:var(--muted)" id="mx" aria-label="Fermer">${ic('x',18)}</button><h2>${esc(lbl)}</h2><p>Un expert MagicPallet revient vers vous pour passer vos chiffres en revue, sans engagement.</p>
  <form id="f-c" style="display:flex;flex-direction:column;gap:12px"><div class="g2"><label>Téléphone<div class="inp"><input name="tel" type="tel" autocomplete="tel"></div></label><label>E-mail<div class="inp"><input name="email" type="email" value="${esc(PROFILE&&PROFILE.email||'')}" autocomplete="email"></div></label></div>
  <label>Un point à préparer ? (facultatif)<textarea name="msg"></textarea></label><button class="btn primary" type="submit">${ic('phone',16)}<span>Être contacté(e)</span></button>
  <p class="legal">Vous préférez écrire ? ${CONTACT.mail} · ${CONTACT.tel}</p></form>`);
  $('#mx').addEventListener('click',closeModal);
  $('#f-c').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);Tr.log('contact_request',{ctx,tel:(f.get('tel')||'').trim(),email:(f.get('email')||'').trim(),msg:(f.get('msg')||'').trim().slice(0,400)});Tr.flush();closeModal();toast('Demande envoyée, nous revenons vers vous')});
}
let tt=null;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),3200)}
$('#scrim').addEventListener('click',()=>{if(WELCOME_PENDING)return;closeDrawer();closeModal()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&!WELCOME_PENDING){closeDrawer();closeModal()}});
$('#nav').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.go)go(b.dataset.go);else if(b.dataset.lock)openTeaser(b.dataset.lock)});
$('#b-side-contact').addEventListener('click',()=>openContact('general'));
$('#tb-info').addEventListener('click',()=>openContact('general'));
$('#hb').addEventListener('click',()=>$('#side').classList.toggle('on'));

/* ---------- back office ---------- */
const BO={rows:[],filter:'all',poll:null,loaded:false,err:false};
const EVT=e=>{const f=k=>FIELDS[k]?FIELDS[k][0]:k,fv=(k,v)=>FIELDS[k]?FIELDS[k][1](v):v;
 switch(e.type){
  case'profile_set':return'Renseigne son profil';
  case'page_view':return`Consulte « ${esc(PAGES[e.page]||e.page)} »`;
  case'input_change':return`Modifie « ${esc(f(e.k))} » : ${e.from==null?'–':esc(fv(e.k,e.from))} → <b>${esc(fv(e.k,e.to))}</b>`;
  case'simulation':return`Simulation : gain net <b>${sgn(e.net)}</b> par an, seuil ${eur2(e.seuil)}`;
  case'stock_estimate':return'Utilise l’estimation du stock immobilisé';
  case'advanced_open':return'Ouvre les hypothèses avancées';
  case'locked_click':return`Clique sur le menu verrouillé « ${esc(MODS[e.module]?MODS[e.module].n:e.module)} »`;
  case'teaser_cta':return`Demande une démo du module « ${esc(MODS[e.module]?MODS[e.module].n:e.module)} »`;
  case'export':return'Enregistre sa simulation (CSV)';
  case'contact_open':return'Ouvre le formulaire de contact';
  case'contact_request':return`<b>Demande à être contacté(e)</b>${e.tel?' · '+esc(e.tel):''}${e.msg?' · « '+esc(e.msg)+' »':''}`;
  default:return esc(e.type)}};
const dt=t=>new Date(t).toLocaleString('fr-FR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
const dur=s=>s<60?s+' s':Math.round(s/60)+' min';
const nm=r=>[r.first_name,r.last_name].filter(Boolean).join(' ')||'Visiteur anonyme';
const api=async(url,opts)=>{const r=await fetch(url,Object.assign({credentials:'same-origin'},opts));if(!r.ok)throw new Error(r.status);return r};
async function loadBO(){try{BO.rows=(await(await api('/api/admin/prospects')).json()).rows;BO.loaded=true;BO.err=false}catch(e){BO.err=true}drawBO()}
function viewAdmin(){
  $('#view').innerHTML=`<div class="hero-t"><h1>Suivi des prospects</h1><p class="lead">Ce que chaque prospect a fait dans l’espace découverte, et combien de fois.</p></div><div id="bo"></div>`;
  clearInterval(BO.poll);loadBO();BO.poll=setInterval(()=>{if(route()==='suivi'&&!document.hidden)loadBO()},20000);
}
function drawBO(){
  if(route()!=='suivi'||!$('#bo'))return;
  if(BO.err&&!BO.loaded){$('#bo').innerHTML=`<div class="empty">Impossible de charger les données.</div>`;return}
  const rows=BO.rows,vis=rows.filter(r=>BO.filter==='all'||r.score.label===BO.filter);
  const sims=rows.reduce((a,b)=>a+b.sims,0),visits=rows.reduce((a,b)=>a+b.visits,0),contacts=rows.filter(r=>r.contacted).length;
  $('#bo').innerHTML=`<div class="kpis"><div class="kpi"><b>${rows.length}</b><span>Prospects</span></div><div class="kpi"><b>${visits}</b><span>Visites</span></div><div class="kpi"><b>${sims}</b><span>Simulations</span></div><div class="kpi"><b>${contacts}</b><span>Demandes de contact</span></div></div>
  <div class="bar-t"><div class="seg" role="group" aria-label="Filtrer">${[['all','Tous'],['hot','Chauds'],['warm','Tièdes'],['cold','Froids']].map(([k,l])=>`<button data-f="${k}" class="${BO.filter===k?'on':''}">${l}</button>`).join('')}</div>
   <span style="flex:1"></span><button class="btn primary sm" id="bo-inv">${ic('userplus',14)}<span>Nouvelle invitation</span></button><a class="btn ghost sm" href="/api/admin/export.csv" download>${ic('download',14)}<span>Exporter</span></a></div>
  ${vis.length?`<div class="tbl-w"><table class="tbl"><thead><tr><th>Prospect</th><th>Intérêt</th><th>Dernière activité</th><th>Visites</th><th>Temps actif</th><th>Simulations</th><th>Menus verrouillés</th><th>Dernier gain simulé</th></tr></thead><tbody>
  ${vis.map(r=>{const lk=Object.entries(r.locked_by||{}).sort((a,b)=>b[1]-a[1]).map(([k,n])=>`${esc(MODS[k]?MODS[k].n:k)} ×${n}`).join(', ')||'–';
   return `<tr class="r" tabindex="0" data-id="${esc(r.id)}"><td class="who"><b>${esc(nm(r))}</b><small>${esc(r.company||'–')}</small></td><td><span class="sc ${r.score.label}">${ic('fire',12)}${r.score.total} · ${{hot:'Chaud',warm:'Tiède',cold:'Froid'}[r.score.label]}</span></td><td>${dt(r.last_seen)}</td><td>${r.visits}</td><td>${dur(r.active_seconds)}</td><td>${r.sims}</td><td>${lk}</td><td>${r.last_sim?`<b class="${r.last_sim.net>=0?'pos':'neg'}">${sgn(r.last_sim.net)}</b>`:'–'}</td></tr>`}).join('')}</tbody></table></div>`
  :`<div class="empty">${rows.length?'Aucun prospect dans ce filtre.':'Aucune activité pour le moment. Créez une invitation pour envoyer un lien personnel à un prospect.'}</div>`}`;
  $$('#bo [data-f]').forEach(b=>b.addEventListener('click',()=>{BO.filter=b.dataset.f;drawBO()}));
  $$('#bo tr.r').forEach(tr=>{const o=()=>openProspect(tr.dataset.id);tr.addEventListener('click',o);tr.addEventListener('keydown',e=>{if(e.key==='Enter')o()})});
  $('#bo-inv').addEventListener('click',openInvite);
}
function openInvite(){
  openModal(`<button class="x" style="all:unset;cursor:pointer;position:absolute;top:16px;right:16px;padding:8px;color:var(--muted)" id="mx" aria-label="Fermer">${ic('x',18)}</button><h2>Nouvelle invitation</h2><p>Un lien personnel : chaque visite de ce prospect lui sera attribuée, sans qu’il ait à se présenter.</p>
  <form id="f-i" style="display:flex;flex-direction:column;gap:12px"><div class="g2"><label>Prénom<div class="inp"><input name="first" required></div></label><label>Nom<div class="inp"><input name="last"></div></label></div>
  <label>Société<div class="inp"><input name="company" required></div></label><label>E-mail (facultatif)<div class="inp"><input name="email" type="email"></div></label><button class="btn primary" type="submit">${ic('link',16)}<span>Créer le lien</span></button></form>`);
  $('#mx').addEventListener('click',closeModal);
  $('#f-i').addEventListener('submit',async e=>{e.preventDefault();const f=new FormData(e.target);
    try{const r=await api('/api/admin/invitations',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({first:f.get('first'),last:f.get('last'),company:f.get('company'),email:f.get('email')})});const j=await r.json();
      $('#modal .mbox').innerHTML=`<h2>Lien prêt</h2><p>Envoyez-le tel quel à ${esc(f.get('first'))}. Il ouvre directement le simulateur à son nom.</p><div class="inp"><input readonly value="${esc(j.url)}" id="inv-url" aria-label="Lien personnel"></div><button class="btn primary" id="inv-copy">${ic('copy',16)}<span>Copier le lien</span></button><button class="btn ghost" id="inv-ok">Fermer</button>`;
      $('#inv-copy').addEventListener('click',()=>copyText(j.url));$('#inv-ok').addEventListener('click',closeModal);loadBO()}catch(err){toast('Création impossible')}});
}
async function copyText(t){try{await navigator.clipboard.writeText(t);toast('Lien copié')}catch(e){const i=$('#inv-url');if(i){i.select();toast('Sélectionné : copiez avec Ctrl+C')}}}
async function openProspect(id){
  const s=BO.rows.find(r=>r.id===id);if(!s)return;const sc=s.score,l=s.last_sim;
  openDrawer(`<span class="tag">${ic('fire',12)}Intérêt ${sc.total} / 100</span><h2>${esc(nm(s))}</h2><p style="margin:-6px 0 0;color:var(--muted)">${esc(s.company||'')}${s.email?' · '+esc(s.email):''}</p>
   <div><h4 style="margin:0 0 8px">Pourquoi ce score</h4><div class="bk">${sc.parts.map(p=>`<span>${esc(p[0])}</span><span>+${p[1]}</span>`).join('')}</div></div>
   ${l?`<div><h4 style="margin:0 0 8px">Dernière simulation</h4><div class="bk"><span>Volume annuel</span><span>${nf.format((l.inputs&&l.inputs.volume)||0)} palettes</span><span>Coûts actuels</span><span>${eur(l.total)}</span><span>Coût MagicPallet</span><span>${eur(l.mpTotal)}</span><span>Gain net</span><span class="${l.net>=0?'pos':'neg'}">${sgn(l.net)}</span></div></div>`:''}
   <div id="tl"><h4 style="margin:0 0 4px">Chronologie</h4><p class="hint">Chargement…</p></div><div id="acts" style="display:flex;flex-direction:column;gap:10px"></div>`);
  try{
   const d=await(await api('/api/admin/prospects/'+id)).json();
   const evs=d.events.map(e=>Object.assign({},e.data,{type:e.type,t:Date.parse(e.at),sid:e.visit_id||'none'}));
   const by={};evs.forEach(e=>(by[e.sid]=by[e.sid]||[]).push(e));
   const html=Object.values(by).sort((a,b)=>a[0].t-b[0].t).map((g,i)=>`<div class="vis">Visite ${i+1} · ${dt(g[0].t)}</div><ul class="tl">${g.map(e=>`<li><time>${new Date(e.t).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})}</time><span>${EVT(e)}</span></li>`).join('')}</ul>`).join('');
   $('#tl').innerHTML=`<h4 style="margin:0 0 4px">Chronologie · ${evs.length} actions</h4>${html||'<p class="hint">Aucun détail enregistré.</p>'}`;
   $('#acts').innerHTML=`<button class="btn ghost" id="a-link">${ic('copy',16)}<span>Copier son lien personnel</span></button><button class="btn ghost" id="a-del">${ic('trash',16)}<span>Supprimer ce prospect et ses données</span></button>`;
   $('#a-link').addEventListener('click',()=>copyText(d.link));
   $('#a-del').addEventListener('click',async()=>{if(!confirm('Supprimer définitivement ce prospect et tout son historique ?'))return;try{await api('/api/admin/prospects/'+id,{method:'DELETE'});closeDrawer();toast('Prospect supprimé');loadBO()}catch(e){toast('Suppression impossible')}});
  }catch(e){const t=$('#tl');if(t)t.innerHTML='<h4>Chronologie</h4><p class="hint">Lecture impossible.</p>'}
}

/* ---------- démarrage ---------- */
async function boot(){
  if(ADMIN){renderNav();return}
  let first=false;
  try{const j=await(await fetch('/api/me',{credentials:'same-origin'})).json();PROFILE=j.profile||null;first=!!j.firstVisit}catch(e){}
  renderNav();
  if(!PROFILE||!PROFILE.first||!PROFILE.company||first){WELCOME_PENDING=true;Tr.hold=true;openWelcome()}else Tr.flush();
}
render();
boot();
})();