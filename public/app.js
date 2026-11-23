(()=>{'use strict';
const ICONS={"grid":{"w":512,"h":512,"d":["M448 96l0 128-160 0 0-128 160 0zm0 192l0 128-160 0 0-128 160 0zM224 224L64 224 64 96l160 0 0 128zM64 288l160 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},"cells":{"w":512,"h":512,"d":["M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},"sync":{"w":512,"h":512,"d":["M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},"user":{"w":448,"h":512,"d":["M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},"help":{"w":512,"h":512,"d":["M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},"calc":{"w":384,"h":512,"d":["M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 64l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"]},"shield":{"w":512,"h":512,"d":["M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},"lock":{"w":448,"h":512,"d":["M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},"truck":{"w":640,"h":512,"d":["M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]},"warehouse":{"w":640,"h":512,"d":["M0 488L0 171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4L640 488c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-264c0-17.7-14.3-32-32-32l-384 0c-17.7 0-32 14.3-32 32l0 264c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24l0-56 384 0 0 56c0 13.3-10.7 24-24 24zM128 400l0-64 384 0 0 64-384 0zm0-96l0-80 384 0 0 80-384 0z"]},"clock":{"w":512,"h":512,"d":["M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},"boxes":{"w":576,"h":512,"d":["M248 0L208 0c-26.5 0-48 21.5-48 48l0 112c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-112c0-26.5-21.5-48-48-48L328 0l0 80c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-80zM64 256c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-40 0 0 80c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-80-40 0zM352 512l160 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-40 0 0 80c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-80-40 0c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2l0 160c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"]},"plus":{"w":448,"h":512,"d":["M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},"minus":{"w":448,"h":512,"d":["M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},"x":{"w":384,"h":512,"d":["M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},"info":{"w":512,"h":512,"d":["M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},"download":{"w":512,"h":512,"d":["M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},"check":{"w":448,"h":512,"d":["M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},"chev":{"w":512,"h":512,"d":["M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},"mail":{"w":512,"h":512,"d":["M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},"phone":{"w":512,"h":512,"d":["M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},"fire":{"w":448,"h":512,"d":["M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},"arrow":{"w":448,"h":512,"d":["M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},"users":{"w":640,"h":512,"d":["M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]},"bars":{"w":448,"h":512,"d":["M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},"coins":{"w":512,"h":512,"d":["M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"]},"hourglass":{"w":384,"h":512,"d":["M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 256 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 0 64 0 32 0zM96 75l0-11 192 0 0 11c0 19-5.6 37.4-16 53L112 128c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9L112 384z"]},"cart":{"w":576,"h":512,"d":["M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},"eye":{"w":576,"h":512,"d":["M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},"trash":{"w":448,"h":512,"d":["M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},"cap":{"w":512,"h":512,"d":["M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},"link":{"w":640,"h":512,"d":["M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},"copy":{"w":448,"h":512,"d":["M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},"userplus":{"w":640,"h":512,"d":["M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},"map":{"w":576,"h":512,"d":["M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},"leaf":{"w":512,"h":512,"d":["M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]},"gear":{"w":512,"h":512,"d":["M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},"sitemap":{"w":576,"h":512,"d":["M208 80c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-8 0 0 40 152 0c30.9 0 56 25.1 56 56l0 32 8 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l8 0 0-32c0-4.4-3.6-8-8-8l-152 0 0 40 8 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l8 0 0-40-152 0c-4.4 0-8 3.6-8 8l0 32 8 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l8 0 0-32c0-30.9 25.1-56 56-56l152 0 0-40-8 0c-26.5 0-48-21.5-48-48l0-64z"]},"chartpie":{"w":576,"h":512,"d":["M304 240l0-223.4c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16L304 240zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4L256 288 412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288l238.4 0z"]},"gauge":{"w":512,"h":512,"d":["M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},"exchange":{"w":512,"h":512,"d":["M32 96l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-64L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-320 0 0 64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64 320 0z"]}};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ic=(n,sz=20,cls='')=>{const i=ICONS[n];if(!i)return'';const m=Math.max(i.w,i.h);return `<svg class="ic ${cls}" viewBox="0 0 ${i.w} ${i.h}" width="${(sz*i.w/m).toFixed(1)}" height="${(sz*i.h/m).toFixed(1)}" aria-hidden="true">${i.d.map(p=>`<path d="${p}" fill="currentColor"/>`).join('')}</svg>`};
const nf=new Intl.NumberFormat('fr-FR');
const eur=n=>nf.format(Math.round(n))+'\u00a0€';
const eur2=n=>new Intl.NumberFormat('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n)+'\u00a0€';
const sgn=n=>(n>0?'+':n<0?'−':'')+eur(Math.abs(n));
const r100=n=>Math.round(n/100)*100,sgnR=n=>sgn(r100(n));
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
function tween(el,to,fmt){if(!el)return;const from=el._v==null?to:el._v;el._v=to;cancelAnimationFrame(el._r);if(reduceMotion||from===to){el.textContent=fmt(to);return}const t0=performance.now(),d=380;const step=t=>{const k=Math.min(1,(t-t0)/d),e=1-Math.pow(1-k,3);el.textContent=fmt(from+(to-from)*e);if(k<1)el._r=requestAnimationFrame(step);else el.textContent=fmt(to)};el._r=requestAnimationFrame(step)}
const CONTACT={mail:'perobert@magicpallet.com',tel:'06 62 40 43 40',book:'https://bookings.cloud.microsoft/bookwithme/user/bfd3769a3c684a7eb2f10381f6529de4%40magicpallet.com?anonymous&ismsaljsauthenabled'};

/* ---------- Grille indicative (à valider) ---------- */
const CF_IMG='/carrefour.png';
const CFG={
  reloc:[[5000,1.20],[10000,1.18],[20000,1.16],[35000,1.14],[55000,1.12],[75000,1.10],[150000,1.09],[225000,1.08],[300000,1.07],[400000,1.06],[500000,1.05],[Infinity,1.00]],
  logiciel:[[1,200],[3,400],[5,450],[10,500],[20,600],[35,700],[50,800],[75,900],[100,1100],[150,1400],[200,1800],[Infinity,2400]],
  conso:[[55000,200],[75000,220],[150000,300],[225000,550],[300000,800],[400000,1050],[500000,1350],[Infinity,1800]],
  seuil:495,logoCarrefour:true,exempleGestion:1.5,kmEvites:443,kgCo2Km:1.06,pallPerPair:247
};
const tier=(t,x)=>t.find(r=>x<=r[0])[1];
function cadence(s){
  const V=Math.max(0,+s.volume||0),N=Math.max(1,+s.sites||1),T=CFG.seuil,perYear=V/T,interval=perYear?365/perYear:Infinity,D=Math.floor(perYear+1e-9);
  const start=new Date(new Date().getFullYear(),new Date().getMonth()+1,1),end=new Date(start.getFullYear()+1,start.getMonth(),1),days=Math.round((end-start)/864e5),months=[];
  for(let m=0;m<12;m++){const a=new Date(start.getFullYear(),start.getMonth()+m,1),b=new Date(start.getFullYear(),start.getMonth()+m+1,1),d0=(a-start)/864e5,d1=(b-start)/864e5;
    months.push({label:a.toLocaleDateString('fr-FR',{month:'short'}),count:Math.floor(V*d1/days/T+1e-9)-Math.floor(V*d0/days/T+1e-9)})}
  const siteCounts=Array.from({length:N},(_,i)=>Math.floor(D/N)+(i<D%N?1:0));
  return{V,N,T,perYear,interval,D,rest:V-D*T,months,siteCounts,siteShip:V/N};
}
const rangeLbl=(t,x,one,many)=>{const i=t.findIndex(r=>x<=r[0]),lo=i>0?t[i-1][0]+1:1;return t[i][0]===Infinity?`plus de ${t[i-1][0]} ${many}`:lo===t[i][0]?`${lo} ${one}`:`${lo} à ${t[i][0]} ${many}`};
const fd=d=>d>=10?String(Math.round(d)):d.toFixed(1).replace('.',',');
const tierLabel=(t,x)=>{const i=t.findIndex(r=>x<=r[0]),lo=i>0?t[i-1][0]:0;return i===0?`jusqu’à ${nf.format(t[0][0])} palettes par an`:t[i][0]===Infinity?`au-delà de ${nf.format(lo)} palettes par an`:`de ${nf.format(lo+1)} à ${nf.format(t[i][0])} palettes par an`};
const DEF={volume:120000,sites:2,transporteurs:3,entrepots:5,gestion:null,heures:0,stockAuto:false,stock:0,urgence:0,perdues:0,valPal:8,tauxHoraire:30,taux:8,fraisStock:8};
const FIELDS={preset:['Exemple choisi',v=>v],volume:['Palettes livrées chez Carrefour / an',v=>nf.format(v)],sites:['Sites d’expédition',v=>v],transporteurs:['Transporteurs',v=>v],entrepots:['Entrepôts Carrefour livrés',v=>v],
 gestion:['Gestion palettes facturée (€ HT / palette)',v=>eur2(v)],heures:['Heures de suivi / mois',v=>v+' h'],
 stock:['Palettes immobilisées',v=>nf.format(v)],urgence:['Palettes achetées en urgence / an',v=>nf.format(v)],perdues:['Palettes non récupérées',v=>v+' %'],
 valPal:['Valeur d’une palette EUR',v=>eur2(v)],tauxHoraire:['Coût horaire complet',v=>eur2(v)],taux:['Coût du capital',v=>v+' %'],fraisStock:['Frais de stockage',v=>v+' %']};
const estStock=s=>Math.round(Math.min(s.transporteurs*s.entrepots*CFG.pallPerPair,s.volume*0.15));
function calc(s){
  const V=Math.max(0,+s.volume||0),hasG=+s.gestion>0,g=hasG?+s.gestion:0;
  const stock=s.stockAuto?estStock(s):(+s.stock||0);
  const it={gestion:V*g,temps:(+s.heures||0)*12*(+s.tauxHoraire||0),stock:stock*(+s.valPal||0)*(((+s.taux||0)+(+s.fraisStock||0))/100),urgence:(+s.urgence||0)*(+s.valPal||0),perdues:V*((+s.perdues||0)/100)*(+s.valPal||0)};
  const total=Object.values(it).reduce((a,b)=>a+b,0);
  const unit=tier(CFG.reloc,V),logM=tier(CFG.logiciel,+s.sites||1),conM=tier(CFG.conso,V),mp={reloc:V*unit,logiciel:12*logM,conso:12*conM,unit,logM,conM,tierLabel:tierLabel(CFG.reloc,V)};
  mp.ti=Math.max(0,CFG.reloc.findIndex(x=>V<=x[0]));if(mp.ti<CFG.reloc.length-1){const lo=CFG.reloc[mp.ti][0]+1,np=CFG.reloc[mp.ti+1][1];mp.next={vol:lo,price:np,reloc:lo*np,dv:lo-V}}
  mp.total=mp.reloc+mp.logiciel+mp.conso;
  const other=total-it.gestion,net=hasG?total-mp.total:null;
  const seuil=V>0?(mp.total-other)/V:0;
  return{g,hasG,stock,it,total,mp,net,perPal:V&&hasG?net/V:0,pct:total?net/total*100:0,seuil,other,V,netAt:x=>V*x+other-mp.total};
}

/* ---------- état local ---------- */
const LS='mp-simulateur-v3';
let S=Object.assign({},DEF),PROFILE=null,WELCOME_PENDING=false;
try{const r=JSON.parse(localStorage.getItem(LS)||'null');if(r&&r.state)S=Object.assign({},DEF,r.state)}catch(e){}
const saveLocal=()=>{try{localStorage.setItem(LS,JSON.stringify({state:S}))}catch(e){}};

/* ---------- modules verrouillés ---------- */
const MODS={
 dashboard:{g:'Piloter',n:'Tableau de bord',i:'gauge',p:'Tout pour piloter votre activité emballage, comme vous l’entendez',pts:['Un tableau de bord entièrement personnalisable : vos graphiques, sous tous les angles','Des indicateurs clés en temps réel : par site, par type de support, par partenaire, ou par groupe de partenaires ou de sites','Vos propres ratios et taux à créer et à piloter : freinte, casse, restitution, réemploi, contestation…','Des rapports à la demande et des extractions en un clic','Des seuils minimum et maximum, et des alertes dès qu’un seuil est franchi','Votre liste de tâches, liée à la gestion de votre parc de supports de manutention'],m:'dash'},
 gestion:{g:'Piloter',n:'Gérer mes flux et soldes',s:'Mes flux et soldes',i:'exchange',p:'Tous vos flux et tous vos soldes de supports de manutention, avec tous vos partenaires',pts:['Enregistrez vos flux : saisie, import Excel ou connexion à votre TMS, WMS ou ERP','Gérez vos partenaires : transporteurs, fournisseurs, destinataires…','Pilotez vos flux internes et externes','Suivez vos soldes avec ces partenaires : dettes et crédits','Gérez vos seuils, alertes et notifications avec vos partenaires'],hl:{i:'truck',t:'Le process palettes Carrefour s’y pilote aussi',p:'Le même outil pilote le nouveau process palettes Carrefour et tous vos autres flux, pour tous vos types de supports de manutention et avec tous vos partenaires.'},m:'list'},
 stocks:{g:'Piloter',n:'Gérer mes stocks',s:'Mes stocks',i:'boxes',p:'Vos supports, site par site, en temps réel',pts:['Stock global et par site, pour tous vos types de supports de manutention','Alertes dès qu’un seuil est franchi','Évolution dans le temps, exportable en un clic'],m:'bars'},
 relocalisation:{g:'Piloter',n:'Approvisionner mes sites',s:'Mes approvisionnements',i:'truck',p:'Vos palettes EUR reviennent là où vous en avez besoin',pts:['Pilotez les relocalisations de vos palettes EUR sur chacun de vos sites, via le service de relocalisation MagicPallet, au fil de vos expéditions','Suivez vos demandes en cours et leur état d’avancement','Indiquez à notre équipe dédiée le site, la quantité et le moment de livraison qui vous conviennent, selon vos capacités de stockage'],hl:{t:'Process palettes Carrefour',p:'Dès que 495 palettes EUR ont été expédiées chez Carrefour, tous entrepôts confondus, une livraison de 495 palettes EUR est programmée sur le site de votre choix.'},m:'list'},
 carte:{g:'Piloter',n:'Voir mes données sur une carte',s:'Ma carte',i:'map',p:'Vos données, visuellement, là où ça se passe',pts:['Vos sites, entrepôts et partenaires sur une seule carte','Vos stocks, vos flux et les soldes de vos partenaires, lieu par lieu','Les alertes déclenchées, là où elles se produisent','Zoom par région, par groupe de sites ou de partenaires'],m:'map'},
 couts:{g:'Mesurer',n:'Gérer mes coûts et mes économies',s:'Mes coûts et économies',i:'chartpie',p:'Ce que coûtent vos supports de manutention, et ce que vous économisez',pts:['Coûts de gestion, d’achat et de relocalisation réunis','Économies mesurées sur vos propres flux','Suivi par période et par site'],m:'bars'},
 carbone:{g:'Mesurer',n:'Mon bilan carbone',i:'leaf',p:'Le CO₂ que vos supports de manutention vous font gagner',pts:['Le CO₂ évité, calculé pour chaque relocalisation','Taux de réemploi par type de support et par site','Données à intégrer à votre bilan carbone'],hl:[{i:'leaf',t:'À chaque relocalisation, le CO₂ que vous évitez',p:'Notre système de matching inter-entreprises réduit de près de 93 %, en moyenne, le transport nécessaire au repositionnement des palettes EUR. À chaque relocalisation, MagicPallet vous indique la quantité de CO₂ ainsi évitée : des économies que vous pouvez utiliser officiellement dans vos rapports publics et vos dispositifs de valorisation officiels.'},{i:'shield',t:'Vos déclarations obligatoires',p:'Le réemploi de vos emballages se déclare chaque année, avec un objectif de 10 % pour tous les producteurs en 2027, et la REP emballages professionnels démarre le 1er janvier 2027. MagicPallet vous fournit vos données de réemploi, par type de support et par site, pour préparer ces déclarations.'}],m:'bars'},
 compte:{g:'Administrer',n:'Mon organisation',i:'sitemap',p:'Votre organisation, telle que vous la pensez',pts:['Dessinez vos établissements, leur arborescence et vos regroupements','Choisissez vos niveaux de consolidation des données','Définissez vos utilisateurs et leurs privilèges','Appliquez vos propres règles de gestion, selon vos pratiques'],m:'tree'},
 parametres:{g:'Administrer',n:'Mes paramètres',i:'gear',p:'Votre compte et vos préférences',pts:['Votre profil et vos coordonnées','Votre mot de passe et la sécurité de votre compte','Votre langue et vos préférences d’affichage','Vos préférences de notifications par e-mail'],m:'list'},
 aides:{g:'Administrer',n:'Aides',i:'help',p:'Tout pour démarrer vite',pts:['Guides pas à pas et documentation','Documentation de l’API pour vos équipes informatiques','Contact direct avec l’équipe MagicPallet'],m:'list'}
};
const PAGES={simuler:'Simuler mes économies',suivi:'Suivi des prospects'};

/* ---------- suivi (envoi au serveur) ---------- */
const ADMIN=document.body.dataset.admin==='1',isAdmin=ADMIN;window.ACCT_WAIT=!ADMIN;
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
/* ---------- menu de compte ---------- */
function renderAcct(){
  const box=$('#acct');if(!box)return;
  if(window.ACCT_WAIT)return;
  const p=PROFILE,known=!!(p&&p.first),adm=isAdmin;
  const ini=adm?'MP':known?((p.first[0]||'')+((p.last||'')[0]||'')).toUpperCase():'?';
  const name=adm?'Administrateur':known?[p.first,p.last].filter(Boolean).join(' '):'Se présenter';
  const sub=adm?'Back office MagicPallet':known&&p.company?p.company:'Espace découverte';
  const mail=encodeURIComponent('Suppression de mes données – espace découverte MagicPallet');
  box.innerHTML=`<button class="acct-b" type="button" data-am="toggle" aria-haspopup="menu" aria-expanded="false" aria-label="Menu du compte : ${esc(name)}"><span class="av">${esc(ini)}</span><span class="acct-t"><b>${esc(name)}</b><small>${esc(sub)}</small></span>${ic('chev',12)}</button>
  <div class="acct-m" id="acct-m" role="menu" hidden>
    <div class="am-h"><span class="av big" aria-hidden="true">${esc(ini)}</span><div><b>${esc(name)}</b><small>${esc(adm?'Back office':known&&p.company?p.company:'Visiteur')}</small><span class="am-badge"><i class="dot"></i>${adm?'Administration':'Espace découverte'}</span></div></div>
    ${adm?'':known?'':`<button class="am-i" role="menuitem" type="button" data-am="hi">${ic('userplus',16)}<span>Me présenter</span></button>`}
    ${adm?'':`<button class="am-i" role="menuitem" type="button" data-am="contact">${ic('phone',16)}<span>Parler à un expert</span></button>`}
    <a class="am-i" role="menuitem" href="mailto:${CONTACT.mail}">${ic('mail',16)}<span>Nous écrire</span></a>
    ${typeof ADMIN!=='undefined'&&ADMIN?`<a class="am-i" role="menuitem" href="/admin/logout">${ic('lock',16)}<span>Se déconnecter</span></a>`:''}
    
  </div>`;
}
function closeAcct(){const m=$('#acct-m');if(!m||m.hidden)return;m.hidden=true;const b=$('#acct [data-am="toggle"]');if(b)b.setAttribute('aria-expanded','false')}
document.addEventListener('click',e=>{
  const b=e.target.closest&&e.target.closest('#acct [data-am]');
  if(!b){if(!(e.target.closest&&e.target.closest('#acct')))closeAcct();return}
  const a=b.dataset.am;
  if(a==='toggle'){const m=$('#acct-m');const open=m.hidden;m.hidden=!open;b.setAttribute('aria-expanded',String(open))}
  else{closeAcct();if(a==='contact')openContact('general');if(a==='hi')openWelcome(null,'')}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAcct()});

const route=()=>{const h=(location.hash||'').slice(1);if(!h&&ADMIN)return'suivi';return PAGES[h]&&(h!=='suivi'||isAdmin)?h:'simuler'};
function renderNav(){
  const cur=route(),cf=CFG.logoCarrefour;let h=`<div class="gl">${cf?`<span class="cfmini"><img src="${CF_IMG}" alt="" width="14" height="11"></span>`:''}Process palettes Carrefour</div><button class="${cur==='simuler'?'on':''}" data-go="simuler" title="Simuler le process palettes Carrefour" aria-label="Simuler mes économies, process palettes Carrefour">${cf?`<span class="ico-wrap">${ic('calc',20)}<i class="cfdot"><img src="${CF_IMG}" alt="" width="9" height="7"></i></span>`:ic('calc',20)}<span class="tx">Simuler mes économies</span></button>`;
  let lg='';for(const [k,m] of Object.entries(MODS)){if(m.g!==lg){lg=m.g;h+=`<div class="gl">${esc(lg)}</div>`}h+=`<button data-lock="${k}" title="Réservé aux clients" aria-label="${esc(m.n)} (réservé aux clients)">${ic(m.i,20)}<span class="tx">${esc(m.s||m.n)}</span><span class="lk">${ic('lock',13)}</span></button>`}
  if(isAdmin)h+=`<div class="sep"></div><div class="gl">Administration</div><button class="${cur==='suivi'?'on':''}" data-go="suivi">${ic('shield',20)}<span class="tx">Suivi des prospects</span></button>`;
  $('#nav').innerHTML=h;
  $('#b-side-contact').innerHTML=ic('mail',16)+'<span class="tx">Parler à un expert</span>';
  $('#hb').innerHTML=ic('bars',22);$('#side-x').innerHTML=ic('x',20);$('#tb-talk').innerHTML=ic('phone',15)+'<span class="tb-t">Parler à un expert</span>';
  renderAcct();
}
function go(p){if(location.hash==='#'+p)render();else location.hash=p}
function render(){
  clearInterval(BO.poll);
  const p=route();document.title=(PAGES[p]||'MagicPallet')+' · MagicPallet';renderNav();closeDrawer();closeSide();$('#mbar').classList.toggle('off',p!=='simuler');
  Tr.log('page_view',{page:p});
  if(p==='suivi')viewAdmin();else viewSim();
  scrollTo(0,0);
}
addEventListener('hashchange',render);

/* ---------- simulateur ---------- */
const cardStep=(k,t,d,icon,min,max)=>`<div class="card"><div class="ch"><span class="bd">${ic(icon,18)}</span><div><h3>${t}</h3><p>${d}</p></div></div><div class="stp"><button type="button" data-step="${k}" data-d="-1" aria-label="Diminuer">${ic('minus',14)}</button><div class="inp"><input data-k="${k}" type="number" min="${min}" max="${max}" step="1" inputmode="numeric" aria-label="${t}"></div><button type="button" data-step="${k}" data-d="1" aria-label="Augmenter">${ic('plus',14)}</button></div></div>`;
const PRESETS={small:{label:'Petit',volume:6000,sites:1,transporteurs:2,entrepots:3},mid:{label:'Moyen',volume:100000,sites:2,transporteurs:3,entrepots:5},big:{label:'Grand',volume:480000,sites:4,transporteurs:6,entrepots:10}};
const KEYS=['volume','sites','gestion','heures','stock','urgence','perdues','transporteurs','entrepots'];
const touched=new Set();
function initTouched(){touched.clear();for(const k of KEYS){if(k==='gestion'){if(S.gestion>0)touched.add(k)}else if(S[k]!==DEF[k])touched.add(k)}if(S.stockAuto)touched.add('stock')}
function markTouched(k){if(k==='gestion'){S.gestion>0?touched.add(k):touched.delete(k)}else if(KEYS.includes(k))touched.add(k)}
const FILL=['volume','sites','gestion','heures','stock','urgence','perdues'];
function filled(k){
  if(k==='gestion')return S.gestion>0;
  if(k==='volume'||k==='sites')return touched.has(k);
  const el=document.querySelector('[data-k="'+k+'"]'),has=!!el&&el.value!=='';
  return k==='stock'?(!!S.stockAuto||(touched.has('stock')&&has)):(touched.has(k)&&has);
}
function nextStep(){
  if(!touched.has('volume'))return{t:'Entrez votre volume annuel',sel:'#in-volume'};
  if(!(S.gestion>0))return{t:'Ajoutez ce que vos transporteurs vous facturent par palette',sel:'[data-k="gestion"]'};
  if(!filled('heures'))return{t:'Indiquez le temps passé à relancer',sel:'[data-k="heures"]'};
  if(!filled('stock'))return{t:'Estimez votre stock immobilisé',sel:'#b-est'};
  if(!filled('urgence'))return{t:'Avez-vous racheté des palettes en urgence ?',sel:'[data-k="urgence"]',open:true};
  if(!filled('perdues'))return{t:'Quelle part des palettes ne revient jamais ?',sel:'[data-k="perdues"]',open:true};
  return{t:'Votre estimation est complète : discutons-en ensemble',cta:true};
}
function updCad(){
  const c=cadence(S),T=CFG.seuil;
  let big='–';
  if(c.V){big=c.D<1?`Votre solde atteint ${T} palettes en <em>${Math.ceil(12/c.perYear)} mois</em>`:c.interval>=1.5?`Une livraison de <b>${T} palettes</b> tous les <em>${fd(c.interval)} jours</em>`:`<em>${(c.perYear/365).toFixed(1).replace('.',',')} livraisons</em> de <b>${T} palettes</b> par jour`}
  $('#cad-big').innerHTML=big;
  $('#cad-sub').textContent=c.V&&c.D<1?'Au rythme de vos expéditions, aucune livraison complète n’intervient sur les 12 prochains mois.':'';
  $('#cad-n').textContent=c.V?(c.D<1?'< 1':nf.format(c.D)):'–';
  {const t=c.D*CFG.kmEvites*CFG.kgCo2Km/1000;$('#cad-co2').textContent=c.V&&c.D>=1?'≈ '+(t<10?t.toFixed(1).replace('.',','):nf.format(Math.round(t))):'–'}
  const mx=Math.max(1,...c.months.map(m=>m.count));
  $('#cad-chart').innerHTML=c.months.map(m=>`<div class="cm" title="${esc(m.label)} : ${m.count} livraison${m.count>1?'s':''}"><b>${m.count}</b><div class="bw"><i style="height:${Math.max(3,m.count/mx*100).toFixed(0)}%"></i></div><span><em class="ml">${esc(m.label)}</em><em class="ms">${esc(m.label[0].toUpperCase())}</em></span></div>`).join('');
  $('#cad-sites').textContent=(c.N>1&&c.D>=1)?`Sur vos ${c.N} sites, chacun serait livré environ tous les ${fd(365*c.N/c.D)} jours.`:'';
  const n0=c.siteCounts[0],slow=c.N>1&&c.D>=1&&(n0===0||365/n0>60);
  $('#cad-tip').innerHTML=ic('arrow',14)+'<span>'+(!c.V?'Renseignez votre volume pour voir votre cadencier.':c.D<1?'Chaque livraison est de '+T+' palettes : dès que votre solde les atteint, elle est programmée sur le site de votre choix.':slow?`En regroupant vos livraisons sur un seul site, vous êtes livré tous les <b>${fd(c.interval)} jours</b> au lieu de ${n0?fd(365/n0):'jamais sur 12 mois'}. Vous choisissez le site de livraison.`:c.N>1?'Chaque livraison de '+T+' palettes va sur un seul site, à tour de rôle ou selon vos instructions. Vous indiquez à notre équipe dédiée le site de livraison.':'Vous choisissez le site de livraison : un seul, ou plusieurs selon vos besoins.')+'</span>';
  $('#cad-tip').style.display=slow?'':'none';
}
function bindGauge(){
  const g=$('#gauge');if(!g)return;
  const lo=0.5,hi=2.5,field=()=>$('[data-k="gestion"]');
  const at=e=>{const b=g.getBoundingClientRect();return Math.round((lo+(hi-lo)*clamp((e.clientX-b.left)/b.width,0,1))*100)/100};
  const set=v=>{const f=field();f.value=String(+v.toFixed(2));f.dispatchEvent(new Event('input',{bubbles:true}))};
  const done=()=>field().dispatchEvent(new Event('change',{bubbles:true}));
  let drag=false;
  g.addEventListener('selectstart',e=>e.preventDefault());
  const ghost=$('#mk-ghost'),tg=$('#t-ghost');
  g.addEventListener('pointerdown',e=>{drag=true;g.classList.remove('hov');g.classList.add('drag');g.setPointerCapture(e.pointerId);set(at(e))});
  g.addEventListener('pointermove',e=>{
    if(drag){set(at(e));return}
    if(e.pointerType!=='mouse')return;
    const v=at(e),p=calc({...S,gestion:v});
    g.classList.add('hov');ghost.style.left=((v-lo)/(hi-lo)*100)+'%';tg.textContent=`${eur2(v)} · ${sgnR(p.net)}`;tg.classList.toggle('neg',p.net<=0);
  });
  g.addEventListener('pointerleave',()=>{g.classList.remove('hov');ghost.style.left='';tg.textContent='Glissez';tg.classList.remove('neg')});
  const end=()=>{if(!drag)return;drag=false;g.classList.remove('drag');done()};
  g.addEventListener('pointerup',end);g.addEventListener('pointercancel',end);
  g.addEventListener('keydown',e=>{
    const k=e.key;if(!['ArrowRight','ArrowUp','ArrowLeft','ArrowDown','Home','End'].includes(k))return;e.preventDefault();
    const cur=+field().value||Math.round(calc(S).seuil*100)/100,st=e.shiftKey?0.10:0.01;
    set(clamp(k==='Home'?lo:k==='End'?hi:cur+((k==='ArrowRight'||k==='ArrowUp')?st:-st),lo,hi));done();
  });
}
function updHero(r){
  const p=Math.min(100,25+Math.round(75*FILL.filter(filled).length/FILL.length)),n=nextStep();
  const ex=$('#ex-chip');ex.textContent=r.hasG?'Votre simulation':(CFG.exempleGestion&&r.V&&r.netAt(CFG.exempleGestion)>0?'Exemple illustratif':'À compléter');ex.classList.toggle('mine',!!r.hasG);
  $('#prec-l').textContent=p<45?'Estimation de départ':p<75?'Estimation affinée':'Estimation fiable';$('#prec-p').textContent=p+' %';$('#prec-i').style.width=p+'%';
  const b=$('#next-step');b.innerHTML=`<span>${esc(n.t)}</span>${ic('arrow',13)}`;b._n=n;
}
function setupSteps(){
  $$('#steps [data-s]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.s).scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'start'})));
  if(!window.IntersectionObserver)return;if(window._sp)window._sp.disconnect();
  window._sp=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('#steps [data-s]').forEach(b=>b.classList.toggle('on',b.dataset.s===e.target.id))}),{rootMargin:'-22% 0px -62% 0px'});
  ['sec-flux','sec-mp','sec-cad','sec-couts'].forEach(id=>window._sp.observe(document.getElementById(id)));
}
function viewSim(){
  $('#view').innerHTML=`
  <div class="hero-t"><h1>Combien allez-vous économiser ?</h1>
   <ul class="trust"><li>${CFG.logoCarrefour?'<span class="cfpill"><img src="'+CF_IMG+'" alt="Carrefour" width="25" height="20"></span>':ic('check',13)}Process intégré aux accords RSE de Carrefour</li><li>${ic('check',13)}100 % des entrepôts Carrefour en France</li></ul></div>
  <nav class="steps" id="steps" aria-label="Étapes de la simulation"><button type="button" data-s="sec-flux"><i>1</i>Votre situation</button><button type="button" data-s="sec-mp"><i>2</i>Votre tarif</button><button type="button" data-s="sec-cad"><i>3</i>Votre cadencier</button><button type="button" data-s="sec-couts"><i>4</i>Pour affiner</button></nav>
  <div class="sim"><div>
    <section class="panel" id="sec-flux"><h2>Votre situation</h2>
      
      <div class="cards">
      <div class="card span2"><div class="ch"><span class="bd">${ic('boxes',18)}</span><div><h3>Palettes EUR livrées chez Carrefour</h3><p>Par an, tous entrepôts confondus</p></div></div>
        <div class="inp"><input id="in-volume" data-k="volume" type="number" min="1000" step="1000" inputmode="numeric" aria-label="Palettes livrées par an"><span>palettes / an</span></div>
        <input id="rg-volume" type="range" min="0" max="100" step="0.5" aria-label="Volume annuel (échelle logarithmique)"></div>
      ${cardStep('sites','Sites d’expédition','Ceux qui expédient vers vos clients','warehouse',1,500)}
      <div class="card span3 kc kc-empty" id="key-card"><div class="ch"><span class="bd">${ic('coins',18)}</span><div><h3>Combien vos transporteurs vous facturent-ils pour la gestion des palettes EUR ?</h3><p>Hors prix du transport : souvent une ligne « gestion palettes » sur leurs factures, sinon demandez-leur. Un ordre de grandeur suffit.</p></div></div>
        <div class="inp" id="w-gestion"><input data-k="gestion" type="number" min="0" step="0.01" inputmode="decimal" placeholder="à renseigner" aria-label="Montant facturé par vos transporteurs pour la gestion des palettes, par palette"><span>€ HT / palette</span></div>
        <div class="gz" id="gz">
          <div class="gauge" id="gauge" role="slider" tabindex="0" aria-label="Montant facturé par vos transporteurs, par palette" aria-valuemin="0.5" aria-valuemax="2.5" aria-valuenow="0.5"><i class="fill" id="g-fill" style="display:none"></i><span class="mk thr" id="mk-thr"><b id="t-thr"></b></span><span class="mk ghost" id="mk-ghost"><b id="t-ghost">Glissez</b></span><span class="mk you" id="mk-you"><b id="t-you"></b></span></div>
          <div class="gauge-sc"><span>0,50 €</span><span>2,50 € par palette</span></div>
          <div class="g-band"><i></i><span>fourchette habituelle, à titre informatif</span></div>
          <div class="gz-k"><b id="gz-kv" class="blank">+ ••• €</b><span id="g-msg"></span></div></div>
        <span class="chip" id="c-gestion"></span></div>
      <div class="cards two" style="grid-column:1/-1">
        <div class="card hasw"><button type="button" class="why" data-why="temps" aria-expanded="false" aria-label="Comment on estime le temps de suivi">?</button><div class="ch"><span class="bd">${ic('clock',18)}</span><div><h3>Temps passé à suivre les soldes et à relancer</h3><p>Rapprochement des soldes avec les transporteurs, désaccords, e-mails et appels, facturation des dettes non soldées</p></div></div>
          <div class="inp"><input data-k="heures" type="number" min="0" step="1" inputmode="numeric" aria-label="Heures par mois"><span>heures / mois</span></div><p class="why-p" id="why-temps" hidden></p><span class="chip" id="c-temps"></span></div>
        <div class="card hasw"><button type="button" class="why" data-why="stock" aria-expanded="false" aria-label="Comment on estime le stock immobilisé">?</button><div class="ch"><span class="bd">${ic('hourglass',18)}</span><div><h3>Stock de palettes immobilisé en attendant les retours</h3><p>Un entrepôt ne rend les palettes à un transporteur qu’à partir de 495 dues : en attendant, vous gardez du stock en plus pour continuer à expédier</p></div></div>
          <div class="row2"><div class="inp" id="w-stock"><input data-k="stock" type="number" min="0" step="50" inputmode="numeric" aria-label="Palettes immobilisées"><span>palettes</span></div><button class="btn ghost sm" type="button" id="b-est">Estimer pour moi</button></div><p class="why-p" id="why-stock" hidden></p><p class="why-p" id="est-note" hidden></p><span class="chip" id="c-stock"></span></div>
      </div>
    </div></section>
    <section class="panel mp" id="sec-mp"><h2>Votre tarif MagicPallet</h2>
      <div class="ticket">
        <div class="tk-row"><span class="bd">${ic('sync',20)}</span><div class="tk-l"><b>Relocalisation de palettes EUR</b><small id="mp-r-tier"></small><small class="eq" id="mp-r-an"></small></div><div class="tk-v"><b id="mp-r-pu">–</b><small>HT / palette</small></div></div>
        <div class="tk-row"><span class="bd">${ic('cells',20)}</span><div class="tk-l"><b>Abonnement mensuel</b><small class="eq" id="mp-s-an"></small></div><div class="tk-v"><b id="mp-s-m">–</b><small>HT / mois</small></div></div>
        <div class="tk-sub">
          <div class="tk-line"><div><b>Usage de la plateforme</b><small id="mp-l-sub"></small></div><span class="amt"><b id="mp-l-m">–</b> / mois</span></div>
          <div class="tk-line"><div><b>Consolidation et avance des palettes</b><small id="mp-c-sub"></small></div><span class="amt"><b id="mp-c-m">–</b> / mois</span></div>
        </div>
        <div class="tk-total"><div><small>Coût MagicPallet estimé</small><b id="mp-t">–</b></div><p id="mp-t-sub"></p></div>
      </div>
      
      <p class="nudge" id="nudge"></p>
      <details class="adv slim" id="adv-incl"><summary>${ic('chev',14)}<span>Ce que comprend votre abonnement</span></summary><ul class="incl">
        <li><b>Usage de la plateforme</b> : tableau de bord, flux et soldes, stocks, carte, coûts et bilan carbone, pour tous vos types de supports de manutention, avec tous vos clients, transporteurs et fournisseurs.</li>
        <li><b>Consolidation et avance des palettes</b> : votre solde consolidé sur tous les entrepôts Carrefour, et les palettes avancées par MagicPallet.</li></ul></details>
      <details class="adv slim" id="adv-stair"><summary>${ic('chev',14)}<span>Voir les paliers de tarif</span><em id="stair-c"></em></summary>
        <div class="stair" id="stair" role="img" aria-label="Paliers de tarif de relocalisation selon le volume annuel"></div>
        <div class="stair-ax"><span>5 000 palettes</span><span></span><span>500 000+</span></div></details>
      <details class="adv slim" id="adv-vol"><summary>${ic('chev',14)}<span>Et si mon volume varie ?</span></summary><ul class="rules"><li>Entre 90 % et 100 % de votre engagement, rien de plus à payer.</li><li>Au-delà, le même tarif s’applique, et un palier supérieur vous est proposé.</li><li>En dessous de 90 %, un ajustement s’applique : il est détaillé dans votre proposition.</li><li>Cette simulation suppose que vous relocalisez exactement votre engagement.</li></ul></details>
      </section>
    <section class="panel" id="sec-cad"><h2>Votre cadencier de récupération</h2>
      <div class="cad-hero"><div><div class="big-t" id="cad-big">–</div><span class="sub" id="cad-sub"></span><span class="chip" style="display:inline-block;margin-top:10px">Rythme modulable selon vos capacités de stockage</span></div>
        <div class="cad-k"><div><b id="cad-n">–</b><small>livraisons par an</small></div><div><b id="cad-co2">–</b><small>tonnes de CO₂ évitées par an (estimation)<button type="button" class="why in" data-why="co2" aria-expanded="false" aria-label="Comment on estime les économies de CO₂">?</button></small></div></div><p class="why-p" id="why-co2" hidden style="flex-basis:100%"></p></div>
      <div class="cad-chart" id="cad-chart" role="img" aria-label="Livraisons prévues, mois par mois"></div>
      <p class="fine" id="cad-sites" style="margin:10px 2px 0"></p>
      <p class="nudge" id="cad-tip"></p>
      <div class="cad-foot"><p class="fine">Hypothèse : expéditions linéaires sur l’année, livraisons réparties à tour de rôle. Site, quantité et rythme se règlent avec notre équipe dédiée, selon vos capacités de stockage et votre saisonnalité.</p><button class="btn ghost sm" id="cad-more" type="button">${ic('sync',14)}<span>Voir comment ça se passe</span></button></div></section>
    <section class="panel" id="sec-couts"><h2>Pour affiner votre estimation</h2>
    <details class="adv" id="refine"><summary>${ic('chev',14)}<span>Transporteurs, entrepôts, achats d’urgence, palettes perdues</span><em>facultatif</em></summary>
    <div class="cards two inner-g">
      ${cardStep('transporteurs','Transporteurs','Ceux qui rapatrient vos palettes','truck',1,60)}
      ${cardStep('entrepots','Entrepôts livrés','Où se cumulent vos soldes','boxes',1,80)}
      <div class="card"><div class="ch"><span class="bd">${ic('cart',18)}</span><div><h3>Achats de palettes en urgence</h3><p>Quand les retours tardent et que vous rachetez pour expédier. Laissez 0 s’il n’y en a pas.</p></div></div>
        <div class="inp"><input data-k="urgence" type="number" min="0" step="10" inputmode="numeric" aria-label="Palettes achetées en urgence par an"><span>palettes / an</span></div><span class="chip" id="c-urgence"></span></div>
      <div class="card"><div class="ch"><span class="bd">${ic('boxes',18)}</span><div><h3>Palettes jamais récupérées</h3><p>Part des palettes livrées que vos transporteurs ne vous rendent jamais</p></div></div>
        <div class="inp"><input data-k="perdues" type="number" min="0" max="100" step="0.5" inputmode="decimal" aria-label="Pourcentage de palettes non récupérées"><span>% des palettes</span></div><span class="chip" id="c-perdues"></span></div>
    </div>
    <details class="adv inner" id="adv"><summary>${ic('chev',14)}<span>Hypothèses avancées</span></summary><div class="g3">
      <label>Valeur d’une palette EUR (€)<div class="inp"><input data-k="valPal" type="number" min="0" step="0.5" inputmode="decimal"></div></label>
      <label>Coût horaire complet (€)<div class="inp"><input data-k="tauxHoraire" type="number" min="0" step="1" inputmode="decimal"></div></label>
      <label>Coût du capital (% / an)<div class="inp"><input data-k="taux" type="number" min="0" max="100" step="0.5" inputmode="decimal"></div></label>
      <label>Frais de stockage : personnel, locaux, assurance (% / an)<div class="inp"><input data-k="fraisStock" type="number" min="0" max="100" step="0.5" inputmode="decimal"></div></label></div></details></details></section>
  </div>
  <aside class="sim-out"><div class="res" id="res">
    <div class="res-hero"><span class="k"><i class="ex" id="ex-chip">À compléter</i><span id="hero-k">Seuil de rentabilité</span></span><strong id="r-net">–</strong><span class="sub" id="r-sub"></span>
      <div class="tlc" id="tl" hidden><div class="tl-h"><span id="tl-t">Économies cumulées</span><div class="tl-seg" role="group" aria-label="Horizon"><button type="button" data-h="12">1 an</button><button type="button" data-h="36" class="on">3 ans</button><button type="button" data-h="60">5 ans</button></div></div>
        <svg id="tl-svg" viewBox="0 0 400 100" role="img" aria-label="Économies cumulées, mois après mois"></svg>
        <div class="tl-k"><b id="tl-v">–</b><span id="tl-s"></span></div></div>
      <div class="chips"><span><span id="r-mpl">Coût MagicPallet par an</span> <b id="r-mpt">–</b></span><span id="r-co2c" hidden><span id="r-co2l">CO₂ évité</span> <b id="r-co2">–</b></span></div>
      <div class="prec"><div class="prec-t"><span id="prec-l"></span><b id="prec-p"></b></div><div class="prec-b"><i id="prec-i"></i></div><button class="next" id="next-step" type="button"></button></div></div>
    <div class="res-body">
      <div class="acts"><button class="btn primary" id="b-contact">${ic('phone',16)}<span>En discuter ensemble</span></button><p class="fine c">Ou <a id="book-link" href="${CONTACT.book}" target="_blank" rel="noopener noreferrer">réservez directement un créneau</a></p></div>
      <div class="msg" id="r-msg"></div>
      
      <details class="adv slim" id="adv-cost"><summary>${ic('chev',14)}<span>Détail des coûts annuels</span></summary><div class="bars">
        <div><div class="bar-l"><span>Aujourd’hui</span><b id="bt-t"></b></div><div class="bar" id="bar-t"></div></div>
        <div><div class="bar-l"><span>Avec MagicPallet</span><b id="bt-m"></b></div><div class="bar" id="bar-m"></div></div>
        <div class="lg" id="lg"></div></div></details>
      <button class="btn ghost" id="b-export">${ic('download',16)}<span>Enregistrer ma simulation</span></button>
      <p class="fine">Estimation indicative, gains arrondis à la centaine d’euros. Elle ne constitue pas une proposition ferme.</p>
    </div></div></aside></div>`;
  initTouched();buildStair();bindSim();syncInputs();update();setupSteps();
  if(window.IntersectionObserver){if(window._io)window._io.disconnect();window._io=new IntersectionObserver(es=>$('#mbar').classList.toggle('hide',es[0].isIntersecting),{threshold:.12});window._io.observe($('#res'))}
  $('#mb-go').onclick=()=>$('#res').scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'start'});
}
function buildStair(){
  $('#stair').innerHTML=CFG.reloc.map((t,i)=>{const h=24+(t[1]-1)/0.2*76;return `<i class="st" style="height:${h.toFixed(1)}%" title="${esc(tierLabel(CFG.reloc,i?CFG.reloc[i-1][0]+1:1))} : ${eur2(t[1])}"><b>${eur2(t[1])}</b></i>`}).join('');
}
let lastTracked={},simTimer=null,userTouched=false;
function bindSim(){
  const release=()=>{if(window._noticeOk){window._noticeOk();window._noticeOk=null}};
  $$('#view [data-k]').forEach(el=>{
    const k=el.dataset.k;
    el.addEventListener('input',()=>{
      release();if(k==='stock')S.stockAuto=false;
      S[k]=el.type==='checkbox'?el.checked:(el.value===''?0:parseFloat(el.value));
      markTouched(k);if(k==='volume')syncVolume();userTouched=true;update(k);
    });
    el.addEventListener('change',()=>{
      const to=S[k],from=lastTracked[k];
      if(from!==to){Tr.log('input_change',{k,from,to});lastTracked[k]=to}
    });
  });
  const rg=$('#rg-volume');
  rg.addEventListener('input',()=>{release();const v=1000*Math.pow(1000,rg.value/100);S.volume=v<50000?Math.round(v/500)*500:Math.round(v/5000)*5000;$('#in-volume').value=S.volume;markTouched('volume');userTouched=true;update('volume');updHint()});
  rg.addEventListener('change',()=>{if(lastTracked.volume!==S.volume){Tr.log('input_change',{k:'volume',from:lastTracked.volume,to:S.volume});lastTracked.volume=S.volume}});
  $$('#view [data-step]').forEach(b=>b.addEventListener('click',()=>{
    release();const k=b.dataset.step,inp=$(`[data-k="${k}"]`),n=clamp((+S[k]||0)+(+b.dataset.d),+inp.min,+inp.max);
    S[k]=n;inp.value=n;markTouched(k);userTouched=true;update(k);if(lastTracked[k]!==n){Tr.log('input_change',{k,from:lastTracked[k],to:n});lastTracked[k]=n}}));
  $$('#view [data-preset]').forEach(b=>b.addEventListener('click',()=>{release();const p=PRESETS[b.dataset.preset];Object.assign(S,{volume:p.volume,sites:p.sites,transporteurs:p.transporteurs,entrepots:p.entrepots});Tr.log('input_change',{k:'preset',from:null,to:p.label});syncInputs();userTouched=true;update('volume')}));
  $('#b-est').addEventListener('click',()=>{S.stockAuto=true;touched.add('stock');Tr.log('stock_estimate',{value:estStock(S)});syncInputs();userTouched=true;update('stock')});
  $('#adv').addEventListener('toggle',()=>{if($('#adv').open)Tr.log('advanced_open')});
  $('#refine').addEventListener('toggle',()=>{if($('#refine').open)Tr.log('advanced_open',{what:'refine'})});
  $('#adv-vol').addEventListener('toggle',()=>{if($('#adv-vol').open)Tr.log('advanced_open',{what:'volume'})});
  $('#adv-incl').addEventListener('toggle',()=>{if($('#adv-incl').open)Tr.log('advanced_open',{what:'incl'})});
  $('#adv-stair').addEventListener('toggle',()=>{if($('#adv-stair').open)Tr.log('advanced_open',{what:'stair'})});
  $('#next-step').addEventListener('click',()=>{const n=$('#next-step')._n;if(!n)return;if(n.cta){openContact('simulation');return}if(n.open&&!$('#refine').open)$('#refine').open=true;const el=$(n.sel);if(el){el.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'center'});setTimeout(()=>el.focus({preventScroll:true}),380)}});
  $('#cad-more').addEventListener('click',()=>openTeaser('relocalisation'));
  $('#b-contact').addEventListener('click',()=>openContact('simulation'));
  $('#book-link').addEventListener('click',()=>{Tr.log('contact_open',{ctx:'booking'});Tr.flush()});
  bindGauge();
  $('#b-export').addEventListener('click',exportCsv);
}
function syncInputs(){
  $$('#view [data-k]').forEach(el=>{const k=el.dataset.k;if(k==='stock'&&S.stockAuto)el.value=estStock(S);else if(el.type==='checkbox')el.checked=!!S[k];else el.value=S[k]==null?'':S[k];if(lastTracked[k]===undefined)lastTracked[k]=S[k]});
  const v=$('#rg-volume');if(v)syncVolume();
}
function syncVolume(){$('#rg-volume').value=clamp(100*Math.log10(Math.max(1000,S.volume)/1000)/3,0,100);updHint()}
function updHint(){}
let TLH=36,TLanim=true;
function setCo2Chip(months,label){
  const el=$('#r-co2c');if(!el)return;const c=cadence(S);
  if(!(c.V&&c.D>=1)){el.hidden=true;return}
  const t=c.D*CFG.kmEvites*CFG.kgCo2Km/1000*months/12;
  el.hidden=false;$('#r-co2l').textContent='CO₂ évité '+label;$('#r-co2').textContent='≈ '+(t<10?t.toFixed(1).replace('.',','):nf.format(Math.round(t)))+' t';
}
function updTL(r,showEx,exNet){
  const box=$('#tl');if(!box)return;
  const net=r.hasG?r.net:(showEx?exNet:null);
  if(net==null||!r.V){box.hidden=true;TLanim=true;$('#r-mpl').textContent='Coût MagicPallet par an';$('#r-mpt')._v=null;$('#r-mpt').textContent=eur(r.mp.total);setCo2Chip(12,'par an');return}
  box.hidden=false;
  $('#tl-t').textContent=r.hasG?'Économies cumulées':'Exemple · économies cumulées';
  $$('#tl [data-h]').forEach(b=>b.classList.toggle('on',+b.dataset.h===TLH));
  const H=TLH,W=400,HT=100,top=12,bot=22,pad=6,pos=net>=0,span=HT-top-bot,y0=pos?HT-bot:top,per=net/12,maxA=Math.max(Math.abs(per*H),1),bw=(W-2*pad)/H;
  let bars='';
  for(let m=1;m<=H;m++){const h=Math.max(1.5,Math.abs(per*m)/maxA*span),x=pad+(m-1)*bw;
    bars+=`<rect class="tl-bar${TLanim?' anim':''}${pos?'':' neg'}" x="${x.toFixed(2)}" y="${(pos?y0-h:y0).toFixed(2)}" width="${Math.max(1,bw-1.2).toFixed(2)}" height="${h.toFixed(2)}" rx="1.5" style="animation-delay:${Math.min(m*7,420)}ms"/>`}
  let marks='';
  for(let y=1;y<=H/12;y++){const x=pad+y*12*bw-bw/2;marks+=`<line x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="${top}" y2="${HT-bot+4}" stroke="rgba(255,255,255,.18)" stroke-dasharray="2 3"/><text x="${x.toFixed(1)}" y="${HT-6}" text-anchor="middle" font-size="10" fill="#B5BBF2">An ${y}</text>`}
  $('#tl-svg').innerHTML=`<defs><linearGradient id="tlg" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1FB99A"/><stop offset="1" stop-color="#3CDAB9"/></linearGradient></defs><line x1="${pad}" x2="${W-pad}" y1="${y0}" y2="${y0}" stroke="rgba(255,255,255,.35)"/>${marks}${bars}`;
  TLanim=false;
  tween($('#tl-v'),per*H,v=>sgnR(v));$('#r-mpl').textContent='Coût MagicPallet sur '+(H/12)+' an'+(H>12?'s':'');tween($('#r-mpt'),r.mp.total/12*H,v=>eur(v));setCo2Chip(H,'sur '+(H/12)+' an'+(H>12?'s':''));$('#tl-v').classList.toggle('neg',net<0);$('#tl-s').textContent=`sur ${H/12} an${H>12?'s':''}`;
}
document.addEventListener('click',e=>{const h=e.target.closest&&e.target.closest('#tl [data-h]');if(h){TLH=+h.dataset.h;TLanim=true;Tr.log('advanced_open',{what:'horizon:'+TLH});update()}});
function whyHtml(k){
  if(k==='co2'){const c=cadence(S),t=c.D*CFG.kmEvites*CFG.kgCo2Km/1000,f=CFG.kgCo2Km.toFixed(2).replace('.',',');
    return `Chaque relocalisation supprime en moyenne près de ${CFG.kmEvites} km de transport poids lourd : c’est la moyenne constatée chez nos clients actuels, pour des palettes qui auraient sinon voyagé en camion de bout en bout. Facteur d’émission : 3,10 kg de CO₂e par litre de gazole routier (Base Empreinte ADEME, production du carburant comprise) × 0,342 litre par km pour un ensemble articulé de 40 tonnes (valeur par défaut de l’information GES), soit ${f} kg de CO₂e par km.<br><br>Calcul : ${nf.format(c.D)} relocalisations × ${CFG.kmEvites} km × ${f} kg ≈ ${t<10?t.toFixed(1).replace('.',','):nf.format(Math.round(t))} tonnes de CO₂ évitées par an.<br><br><b>Estimation grossière</b> : elle sera affinée au fil de la collaboration, d’après vos relocalisations réellement effectuées. Les économies de CO₂ constatées sur ces relocalisations sont valables officiellement dans vos rapports publics et autres dispositifs de valorisation officiels.<br><br>Sources : <a href="https://base-empreinte.ademe.fr/" target="_blank" rel="noopener noreferrer">Base Empreinte ADEME</a> ; <a href="https://projetcelsius.com/blog/bilan-carbone-transporteur-routier/" target="_blank" rel="noopener noreferrer">exemple de calcul détaillé</a>.`}
  if(k==='temps')return `Coût = heures par mois × 12 × coût horaire complet (${eur(+S.tauxHoraire||0)} par heure).<br><br><b>Pourquoi 30 € par défaut ?</b> Pour un employé avec quelques années d’ancienneté (1,2 à 1,4 Smic, soit 2 240 à 2 610 € bruts par mois), le coût employeur est de 21 à 26 € par heure travaillée : charges patronales de 25 à 35 %, 1 607 heures par an. On y ajoute environ 20 % de frais indirects (poste de travail, encadrement, formation), d’où 30 €. À titre de comparaison, le coût horaire moyen tous métiers confondus est de 44,7 € (Insee, 2025).<br><br>Le coût horaire se modifie dans « Pour affiner », rubrique Hypothèses avancées.<br>Sources : <a href="https://www.insee.fr/fr/statistiques/8733109" target="_blank" rel="noopener noreferrer">Insee, coût du travail</a> ; <a href="https://www.info.gouv.fr/public/index.php/actualite/le-smic-revalorise-le-1er-juin-2026" target="_blank" rel="noopener noreferrer">Smic au 1er juin 2026</a> ; <a href="https://payfit.com/fr/fiches-pratiques/comment-calculer-le-cout-dun-salarie/" target="_blank" rel="noopener noreferrer">PayFit, coût d’un salarié</a>.`;
  return `Des palettes qui attendent leur retour, c’est un stock en plus, qui coûte chaque année : du capital immobilisé (${S.taux} %) et des frais de stockage (${S.fraisStock} % : personnel, locaux, assurance), soit ${(+S.taux||0)+(+S.fraisStock||0)} % de sa valeur. Exemple : 10 000 € de palettes en attente coûtent ${eur(10000*((+S.taux||0)+(+S.fraisStock||0))/100)} par an.<br><br><b>Pourquoi ${CFG.pallPerPair} palettes ?</b> Pour un transporteur et un entrepôt Carrefour donnés, les palettes dues s’accumulent de 0 à 495, puis l’entrepôt les rend d’un coup et le compteur repart de 0. En moyenne, le compteur est à mi-chemin : environ ${CFG.pallPerPair} palettes en attente. Avec ${S.transporteurs} transporteurs et ${S.entrepots} entrepôts, cela fait ${S.transporteurs*S.entrepots} compteurs, soit ${nf.format(S.transporteurs*S.entrepots*CFG.pallPerPair)} palettes en attente en moyenne.<svg viewBox="0 0 360 78" width="100%" style="max-width:340px;display:block;margin:8px 0 4px" role="img" aria-label="Le compteur de palettes dues monte de 0 à 495 puis retombe à 0 : en moyenne, environ 247"><line x1="8" y1="66" x2="352" y2="66" stroke="currentColor" stroke-opacity=".25"/><polyline fill="none" stroke="var(--mint-deep)" stroke-width="2.5" stroke-linejoin="round" points="10,66 100,14 100,66 190,14 190,66 280,14"/><line x1="8" y1="40" x2="352" y2="40" stroke="currentColor" stroke-opacity=".6" stroke-dasharray="4 4"/><text x="12" y="10" font-size="10" fill="currentColor">495</text><text x="356" y="35" text-anchor="end" font-size="10" fill="currentColor">≈ ${CFG.pallPerPair} en moyenne</text><text x="12" y="77" font-size="10" fill="currentColor">0</text></svg>Calcul : palettes en attente × ${eur(+S.valPal||0)} × ${(+S.taux||0)+(+S.fraisStock||0)} % par an (15 % de votre volume au maximum).<br><br>Estimation prudente : on ne compte ni l’obsolescence ni les pertes, alors qu’un stock coûte souvent 20 à 30 % de sa valeur par an, tout compris.<br>Sources : <a href="https://www.pennylane.com/fr/fiches-pratiques/comptabilite/cout-de-stockage-ecommerce" target="_blank" rel="noopener noreferrer">Pennylane, coût de stockage</a> ; <a href="https://openclassrooms.com/courses/6059131-pilotez-la-supply-chain-dans-l-industrie-du-futur/6501506-suivez-les-couts-de-votre-supply-chain" target="_blank" rel="noopener noreferrer">OpenClassrooms, coûts de la supply chain</a>.`;
}
document.addEventListener('click',e=>{
  const w=e.target.closest&&e.target.closest('[data-why]');
  if(w){const k=w.dataset.why,p=document.getElementById('why-'+k),open=p.hidden;p.hidden=!open;if(open)p.innerHTML=whyHtml(k);w.setAttribute('aria-expanded',String(open));if(open)Tr.log('advanced_open',{what:'why:'+k});return}
  if(e.target.closest&&e.target.closest('#est-edit')){const d=$('#refine');if(d&&!d.open)d.open=true;const el=$('[data-k="transporteurs"]');if(el){el.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'center'});setTimeout(()=>el.focus({preventScroll:true}),350)}}
});
function update(k){
  if(k==='transporteurs'||k==='entrepots'||k==='volume'){if(S.stockAuto)$('[data-k="stock"]').value=estStock(S)}
  const r=calc(S);saveLocal();updHero(r);updCad();
  {const en=$('#est-note');if(en){en.hidden=!S.stockAuto;if(S.stockAuto)en.innerHTML=`Estimation : ${S.transporteurs} transporteurs × ${S.entrepots} entrepôts × ${CFG.pallPerPair} palettes en moyenne, dans la limite de 15 % de votre volume. <button type="button" class="lnk" id="est-edit">Modifier</button>`}}
  $('#c-gestion').textContent=r.hasG?`= ${eur(r.it.gestion)} par an`:'À renseigner';
  $('#c-temps').textContent=`= ${eur(r.it.temps)} par an`;
  $('#c-stock').textContent=`= ${eur(r.it.stock)} par an de coût du stock immobilisé`;
  $('#c-urgence').textContent=`= ${eur(r.it.urgence)} par an`;
  $('#c-perdues').textContent=`= ${eur(r.it.perdues)} par an`;
  $('#mp-r-pu').textContent=eur2(r.mp.unit);$('#mp-r-tier').textContent=`Palier ${r.mp.tierLabel}, tarif fixé pour 12 mois.`;$('#mp-r-an').textContent=`${nf.format(r.V)} palettes × ${eur2(r.mp.unit)} = ${eur(r.mp.reloc)} par an`;
  $('#mp-l-m').textContent=eur(r.mp.logM);$('#mp-l-sub').textContent=`Pilotage de tous vos flux, soldes et stocks de supports de manutention, avec tous vos partenaires. Tranche : ${rangeLbl(CFG.logiciel,+S.sites||1,'site d’expédition','sites d’expédition')}.`;
  $('#mp-c-m').textContent=eur(r.mp.conM);$('#mp-c-sub').textContent=`Nous consolidons vos soldes sur tous les entrepôts Carrefour et vous avançons les palettes : livré dès 495 palettes, sans attendre qu’un entrepôt ou un transporteur ait cumulé son complet.`;
  $('#mp-s-m').textContent=eur(r.mp.logM+r.mp.conM);$('#mp-s-an').textContent=`${eur(r.mp.logM+r.mp.conM)} × 12 = ${eur(r.mp.logiciel+r.mp.conso)} par an`;
  tween($('#mp-t'),r.mp.total,v=>eur(v)+' par an');$('#mp-t-sub').textContent=r.V?`soit ${eur2(r.mp.total/r.V)} par palette.`:'';
  
  $$('#stair .st').forEach((el,k)=>{el.classList.toggle('lo',k<r.mp.ti);el.classList.toggle('cur',k===r.mp.ti);el.classList.toggle('nx',k===r.mp.ti+1)});
  $('#stair-c').textContent=`${eur2(r.mp.unit)} par palette`;
  const nx=r.mp.next;$('#nudge').innerHTML=ic('arrow',14)+'<span>'+(!nx?`Vous êtes au meilleur tarif : ${eur2(r.mp.unit)} par palette.`:nx.reloc<r.mp.reloc?`À <b>${nf.format(nx.vol)} palettes</b> (+${nf.format(nx.dv)}), le tarif passe à ${eur2(nx.price)} : votre relocalisation coûterait <b>${eur(r.mp.reloc-nx.reloc)} de moins</b>.`:`À partir de <b>${nf.format(nx.vol)} palettes</b>, le tarif passe à ${eur2(nx.price)} par palette.`)+'</span>';
  const net=$('#r-net'),msg=$('#r-msg'),exg=CFG.exempleGestion,exNet=(!r.hasG&&exg&&r.V)?r.netAt(exg):null,showEx=exNet!=null&&exNet>0;
  if(r.hasG){
    $('#hero-k').textContent='Gain net estimé par an';$('#mb-l').textContent='Gain net estimé par an';
    tween(net,r.net,v=>sgnR(v));net.classList.toggle('neg',r.net<0);tween($('#mb-net'),r.net,v=>sgnR(v));
    $('#r-sub').textContent=r.V?`soit ${sgnR(r.net/12)} par mois · ${r.perPal>=0?'+':'−'}${eur2(Math.abs(r.perPal))} par palette`:'';
    msg.classList.toggle('neg',r.net<=0);
    if(r.net>0)msg.innerHTML=r.seuil<=0.5?`Sur ces hypothèses, vous restez gagnant quel que soit le montant facturé par vos transporteurs.`:`Vous restez gagnant tant que vos transporteurs vous facturent plus de <b>${eur2(r.seuil)}</b> par palette.`;
    else msg.innerHTML=`Sur ces hypothèses, pas de gain. Il faudrait que vos transporteurs vous facturent plus de <b>${eur2(r.seuil)}</b> par palette, ou que vos autres postes pèsent davantage (voir « Pour affiner »).`;
  }else if(showEx){
    $('#hero-k').textContent='Gain annuel, à titre d’exemple';$('#mb-l').textContent='Exemple à '+eur2(exg)+' / palette';
    cancelAnimationFrame(net._r);net._v=null;net.textContent=sgnR(exNet);net.classList.remove('neg');
    cancelAnimationFrame($('#mb-net')._r);$('#mb-net')._v=null;$('#mb-net').textContent=sgnR(exNet);
    $('#r-sub').textContent=`Si vos transporteurs vous facturent ${eur2(exg)} par palette, milieu de la fourchette habituelle (1 € à 2 €). Rentable dès ${eur2(r.seuil)} par palette.`;
    msg.classList.remove('neg');msg.innerHTML='Ceci est un exemple, pas votre résultat. Le seul chiffre qui manque est le vôtre : <b>ce que vos transporteurs vous facturent aujourd’hui par palette</b> pour la gestion et le retour des palettes EUR. Il figure sur vos factures de transport.';
  }else{
    $('#hero-k').textContent='Seuil de rentabilité';$('#mb-l').textContent='Seuil de rentabilité';
    cancelAnimationFrame(net._r);net._v=null;net.textContent=r.V?eur2(r.seuil)+' / palette':'–';net.classList.remove('neg');
    cancelAnimationFrame($('#mb-net')._r);$('#mb-net')._v=null;$('#mb-net').textContent=r.V?eur2(r.seuil)+' / palette':'–';
    $('#r-sub').textContent='Vous gagnez dès que vos transporteurs vous facturent plus que cela, avant même vos autres postes.';
    msg.classList.remove('neg');msg.innerHTML='Le seul chiffre qui manque est le vôtre : <b>ce que vos transporteurs vous facturent aujourd’hui par palette</b> pour la gestion et le retour des palettes EUR. Il figure sur vos factures de transport.';
  }
  updTL(r,showEx,exNet);
  const lo=0.5,hi=2.5,pc=x=>clamp((x-lo)/(hi-lo),0,1)*100;
  $('#gauge').style.setProperty('--sp',pc(r.seuil)+'%');$('#mk-thr').style.left=pc(r.seuil)+'%';const you=$('#mk-you');you.style.display=r.hasG?'':'none';if(r.hasG)you.style.left=pc(r.g)+'%';
  $('#t-thr').textContent=r.seuil<=lo?`Seuil < ${eur2(lo)}`:r.seuil>=hi?`Seuil > ${eur2(hi)}`:`Seuil ${eur2(r.seuil)}`;$('#t-you').textContent=`Vous : ${eur2(r.g)}`;
  {const gz=$('#gauge');gz.setAttribute('aria-valuenow',String(r.hasG?clamp(r.g,lo,hi):lo));gz.setAttribute('aria-valuetext',r.hasG?`${eur2(r.g)} par palette`:'Pas encore renseigné');
   const kv=$('#gz-kv'),sg=r.hasG?(r.net>0?1:-1):0;
   if(r.hasG){tween(kv,r.net,v=>sgnR(v))}else{cancelAnimationFrame(kv._r);kv._v=null;kv.textContent='+ ••• €'}
   if(kv._s&&sg&&kv._s!==sg){kv.classList.remove('pop');void kv.offsetWidth;kv.classList.add('pop')}kv._s=sg;
   kv.classList.toggle('neg',r.hasG&&r.net<0);kv.classList.toggle('blank',!r.hasG);$('#key-card').classList.toggle('kc-empty',!r.hasG);
   $('#g-msg').textContent=r.hasG?(r.net>0?`d’économies par an, à ${eur2(r.g)} la palette`:`par an : pas d’économie à ${eur2(r.g)} la palette`):'Glissez, ou saisissez votre montant : votre gain se révèle';
   gz.classList.toggle('idle',!r.hasG);
   const fl=$('#g-fill');if(r.hasG){const a0=pc(r.seuil),b0=pc(r.g);fl.style.left=Math.min(a0,b0)+'%';fl.style.width=Math.abs(b0-a0)+'%';fl.classList.toggle('neg',r.g<r.seuil);fl.style.display=''}else fl.style.display='none'}
  const mx=Math.max(r.total,r.mp.total,1),seg=(vals,cls)=>vals.map((v,i)=>`<i style="width:${v/mx*100}%;background:var(${cls[i]})"></i>`).join('');
  $('#bar-t').innerHTML=seg([r.it.gestion,r.it.temps,r.it.stock,r.it.urgence,r.it.perdues],['--s1','--s2','--s3','--s4','--s5']);
  $('#bar-m').innerHTML=seg([r.mp.reloc,r.mp.logiciel,r.mp.conso],['--mint','--mint','--mint']);
  const bm=$('#bar-m').children;if(bm[1])bm[1].style.opacity='.7';if(bm[2])bm[2].style.opacity='.45';
  $('#bt-t').textContent=r.hasG?eur(r.total):'à compléter';$('#bt-m').textContent=eur(r.mp.total);
  const row=(c,n,v)=>`<span class="n" style="--c:${c}">${n}</span><span class="v">${typeof v==='string'?v:eur(v)}</span>`;
  $('#lg').innerHTML=[row('var(--s1)','Gestion palettes',r.hasG?r.it.gestion:'à renseigner'),row('var(--s2)','Temps de suivi',r.it.temps),row('var(--s3)','Stock immobilisé',r.it.stock),row('var(--s4)','Achats d’urgence',r.it.urgence),row('var(--s5)','Palettes non récupérées',r.it.perdues),
    row('var(--mint)',`Relocalisation (${eur2(r.mp.unit)} / palette)`,r.mp.reloc),row('var(--mint)','Abonnement : usage de la plateforme',r.mp.logiciel),row('var(--mint)','Abonnement : consolidation et avance',r.mp.conso)].join('');
  
  if(userTouched&&r.hasG){clearTimeout(simTimer);simTimer=setTimeout(()=>{const c=calc(S);
    Tr.log('simulation',{inputs:Object.assign({},S,{stock:c.stock}),net:Math.round(c.net),total:Math.round(c.total),mpTotal:Math.round(c.mp.total),seuil:+c.seuil.toFixed(2)});userTouched=false},1800)}
}
function csvEsc(v){v=String(v);return /[;"\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v}
async function exportCsv(){
  if(!(PROFILE&&PROFILE.first)){openWelcome(()=>exportCsv(),'export');return}
  const r=calc(S),rows=[['Paramètre','Valeur']];
  for(const k of ['volume','sites','transporteurs','entrepots','gestion','heures','stock','urgence','perdues','valPal','tauxHoraire','taux']){const v=k==='stock'?r.stock:k==='gestion'?(r.hasG?r.g:'non renseigné'):S[k];rows.push([FIELDS[k][0],v])}
  rows.push([],['Résultat','Montant annuel (€)'],['Gestion palettes facturée',Math.round(r.it.gestion)],['Temps de suivi',Math.round(r.it.temps)],['Stock immobilisé',Math.round(r.it.stock)],['Achats d’urgence',Math.round(r.it.urgence)],['Palettes non récupérées',Math.round(r.it.perdues)],['Total coûts actuels',Math.round(r.total)],
   ['Relocalisation MagicPallet',Math.round(r.mp.reloc)],['Abonnement – usage de la plateforme',Math.round(r.mp.logiciel)],['Abonnement – consolidation et avance',Math.round(r.mp.conso)],['Total MagicPallet',Math.round(r.mp.total)],['Tarif de relocalisation (€ HT / palette)',r.mp.unit.toFixed(2)],['Abonnement – usage de la plateforme (€ HT / mois)',r.mp.logM],['Abonnement – consolidation et avance (€ HT / mois)',r.mp.conM],['Livraisons pleines de '+CFG.seuil+' palettes par an',cadence(S).D],['Intervalle moyen entre deux livraisons (jours)',isFinite(cadence(S).interval)?cadence(S).interval.toFixed(1):''],['Gain net estimé',r.hasG?Math.round(r.net):'à calculer'],['Seuil de rentabilité (€ / palette)',r.seuil.toFixed(2)]);
  Tr.log('export');
  try{const blob=new Blob(['\ufeff'+rows.map(x=>x.map(csvEsc).join(';')).join('\n')],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='simulation-magicpallet.csv';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),2000);toast('Simulation enregistrée')}catch(e){toast('Enregistrement indisponible')}
}

/* ---------- tiroir, modales ---------- */
function mock(kind){
  if(kind==='dash')return `<div class="in"><div class="k3"><div></div><div></div><div></div></div><div class="ln"><svg viewBox="0 0 300 84" preserveAspectRatio="none"><polyline fill="none" stroke="#3CDAB9" stroke-width="3" points="0,70 40,60 80,64 120,40 160,46 200,26 240,30 300,8"/><polyline fill="none" stroke="#3B49C9" stroke-width="3" points="0,76 50,70 100,72 150,58 200,60 250,48 300,40"/></svg></div><div class="rw"></div><div class="rw" style="width:70%"></div></div>`;
  if(kind==='bars')return `<div class="in"><div class="k3"><div></div><div></div><div></div></div><div class="ln bars-m">${[40,62,48,78,56,90,70].map(h=>`<i style="height:${h}%"></i>`).join('')}</div></div>`;
  if(kind==='map')return `<div class="in"><div class="ln map-m">${[[18,30],[34,62],[47,38,1],[58,70],[70,28],[82,56,1],[26,78]].map(p=>`<i class="${p[2]?'al':''}" style="left:${p[0]}%;top:${p[1]}%"></i>`).join('')}</div><div class="rw"></div><div class="rw" style="width:72%"></div></div>`;
  if(kind==='tree')return `<div class="in">${[0,18,36,36,18,36].map(m=>`<div class="rw" style="margin-left:${m}px;height:28px"></div>`).join('')}</div>`;
  return `<div class="in"><div class="rw"></div><div class="rw"></div><div class="rw"></div><div class="rw"></div></div>`;
}
function openDrawer(html){$('#drawer').innerHTML=`<button class="x" id="dx" aria-label="Fermer">${ic('x',18)}</button>${html}`;$('#drawer').classList.add('on');$('#scrim').classList.add('on');$('#dx').addEventListener('click',closeDrawer);$('#dx').focus()}
function closeDrawer(){$('#drawer').classList.remove('on');if(!$('#modal').classList.contains('on'))$('#scrim').classList.remove('on')}
function openTeaser(k){
  const m=MODS[k];Tr.log('locked_click',{module:k});
  openDrawer(`<span class="tag">${ic('lock',12)}Réservé aux clients</span><h2>${esc(m.n)}</h2><p style="margin:0;font-size:17px;color:var(--muted)">${esc(m.p)}</p>
   <ul>${m.pts.map(p=>`<li>${ic('check',14)}<span>${esc(p)}</span></li>`).join('')}</ul>
   ${(Array.isArray(m.hl)?m.hl:m.hl?[m.hl]:[]).map(h=>`<div class="hl">${ic(h.i||'truck',20)}<div><b>${esc(h.t)}</b><span>${esc(h.p)}</span></div></div>`).join('')}
   <div class="mock">${mock(m.m)}<div class="lock"><span>${ic('lock',14)}Activé avec votre compte client</span></div></div>
   <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto"><p class="fine c" style="margin:0">Une démonstration de l’ensemble de notre plateforme, pas seulement de ce module.</p><button class="btn primary" id="td-demo">${ic('eye',16)}<span>Demander une démo de la plateforme</span></button><button class="btn ghost" id="td-back">Retour au simulateur</button></div>`);
  $('#td-demo').addEventListener('click',()=>{Tr.log('teaser_cta',{module:k});closeDrawer();openContact('demo',k)});
  $('#td-back').addEventListener('click',()=>{closeDrawer();go('simuler')});
}
function openModal(html,locked){const own=locked||html.includes('id="mx"');$('#modal').innerHTML=`<div class="mbox">${own?'':`<button class="x" type="button" id="mx" aria-label="Fermer" style="all:unset;cursor:pointer;position:absolute;top:16px;right:16px;padding:8px;color:var(--muted)">${ic('x',18)}</button>`}${html}</div>`;if(!own)$('#mx').addEventListener('click',closeModal);$('#modal').classList.add('on');$('#scrim').classList.add('on');const f=$('#modal input,#modal textarea');if(f)f.focus()}
function closeModal(){$('#modal').classList.remove('on');if(!$('#drawer').classList.contains('on'))$('#scrim').classList.remove('on')}
async function saveProfile(body){const r=await fetch('/api/profile',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),credentials:'same-origin'});if(!r.ok)throw 0;PROFILE=(await r.json()).profile;WELCOME_PENDING=false;Tr.hold=false;Tr.log('profile_set');Tr.flush()}
let GATED=false;
function gate(){GATED=true;document.body.classList.add('gated');['.main','#side'].forEach(s=>{const e=document.querySelector(s);if(e)e.inert=true});openWelcome(null,'gate')}
function ungate(){GATED=false;document.body.classList.remove('gated');['.main','#side'].forEach(s=>{const e=document.querySelector(s);if(e)e.inert=false})}
function openWelcome(after,ctx){
  const p=PROFILE||{};
  const T={gate:['Avant de commencer','Dites-nous qui vous êtes pour accéder au simulateur. Nous gardons votre simulation et préparons un échange sur vos propres chiffres.'],export:['Où enregistrer votre simulation ?','Dites-nous qui vous êtes : nous gardons votre simulation et préparons votre étude chiffrée.'],contact:['Où vous recontacter ?','Dites-nous qui vous êtes : un expert MagicPallet revient vers vous avec une étude sur vos propres chiffres.']}[ctx]||['Bienvenue dans votre espace découverte','Dites-nous qui vous êtes pour enregistrer votre simulation.'];
  openModal(`<h2>${esc(T[0])}</h2><p>${esc(T[1])}</p>
  <form id="f-w" style="display:flex;flex-direction:column;gap:12px"><div class="g2"><label>Prénom<div class="inp"><input name="first" required minlength="2" autocomplete="given-name" value="${esc(p.first||'')}"></div></label><label>Nom<div class="inp"><input name="last" required minlength="2" autocomplete="family-name" value="${esc(p.last||'')}"></div></label></div>
  <label>Société<div class="inp"><input name="company" required minlength="2" autocomplete="organization" value="${esc(p.company||'')}"></div></label><label>E-mail professionnel<div class="inp"><input name="email" type="email" autocomplete="email" value="${esc(p.email||'')}"></div></label>
  <button class="btn primary" type="submit">${ctx==='gate'?'Accéder au simulateur':'Continuer'}</button><p class="legal">MagicPallet conserve votre identité, vos saisies et les pages consultées dans cet espace afin de préparer votre étude chiffrée. Vous pouvez demander leur suppression à ${CONTACT.mail}.</p></form>`,ctx==='gate');
  $('#f-w').addEventListener('submit',async e=>{e.preventDefault();const f=new FormData(e.target);
    const body={first:(f.get('first')||'').trim(),last:(f.get('last')||'').trim(),company:(f.get('company')||'').trim(),email:(f.get('email')||'').trim()};
    try{await saveProfile(body);ungate();closeModal();renderNav();if(after)after()}catch(err){toast('Enregistrement impossible, réessayez')}});
}
function openContact(ctx,from){
  if(!(PROFILE&&PROFILE.first)){openWelcome(()=>openContact(ctx,from),'contact');return}
  const demo=ctx==='demo',sim=ctx==='simulation';
  const lbl=demo?'Démonstration de la plateforme MagicPallet':sim?'En discuter ensemble':'Parler à un expert';
  const sub=demo?'Un expert MagicPallet vous présente notre plateforme de gestion des supports de manutention, sur vos propres cas d’usage, sans engagement.':sim?'Un expert MagicPallet passe vos chiffres en revue avec vous, sans engagement.':'Un expert MagicPallet répond à vos questions sur le process Carrefour et sur la plateforme, sans engagement.';
  Tr.log('contact_open',{ctx,from});
  let mode='call';
  openModal(`<button class="x" style="all:unset;cursor:pointer;position:absolute;top:16px;right:16px;padding:8px;color:var(--muted)" id="mx" aria-label="Fermer">${ic('x',18)}</button><h2>${esc(lbl)}</h2><p>${esc(sub)}</p>
  <form id="f-c" style="display:flex;flex-direction:column;gap:14px">
    <div class="seg full" id="c-mode" role="group" aria-label="Votre demande"><button type="button" data-mode="call" class="on">${ic('phone',14)}<span>Être rappelé(e)</span></button><button type="button" data-mode="rdv">${ic('clock',14)}<span>Prendre rendez-vous</span></button></div>
    <div id="call-f" style="display:flex;flex-direction:column;gap:14px">
      <div class="g2"><label>Téléphone<div class="inp"><input name="tel" type="tel" autocomplete="tel"></div></label><label>E-mail<div class="inp"><input name="email" type="email" value="${esc(PROFILE&&PROFILE.email||'')}" autocomplete="email"></div></label></div>
      <label>Un point à préparer ? (facultatif)<textarea name="msg"></textarea></label>
      <button class="btn primary" type="submit" id="c-go">${ic('phone',16)}<span>Être rappelé(e)</span></button>
    </div>
    <div id="rdv-b" style="display:none;flex-direction:column;gap:14px">
      <p class="hint" style="margin:0">Choisissez le créneau qui vous convient directement dans l’agenda : la réservation est immédiate, sans échange supplémentaire.</p>
      <a class="btn primary" id="rdv-go" href="${CONTACT.book}" target="_blank" rel="noopener noreferrer">${ic('clock',16)}<span>Choisir un créneau</span></a>
    </div>
    <p class="legal">Vous préférez écrire ? ${CONTACT.mail} · ${CONTACT.tel}</p></form>`);
  $('#mx').addEventListener('click',closeModal);
  const upd=()=>{$$('#c-mode [data-mode]').forEach(b=>b.classList.toggle('on',b.dataset.mode===mode));$('#call-f').style.display=mode==='call'?'flex':'none';$('#rdv-b').style.display=mode==='rdv'?'flex':'none'};
  $$('#c-mode [data-mode]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;upd()}));
  $('#rdv-go').addEventListener('click',()=>{Tr.log('contact_open',{ctx:'booking',from:ctx});Tr.flush();setTimeout(closeModal,150)});
  upd();
  $('#f-c').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),tel=(f.get('tel')||'').trim(),email=(f.get('email')||'').trim();
    if(!tel&&!email){toast('Indiquez un téléphone ou un e-mail');return}
    Tr.log('contact_request',{ctx,from,mode:'call',tel,email,msg:(f.get('msg')||'').trim().slice(0,400)});Tr.flush();closeModal();
    toast('Demande envoyée, nous revenons vers vous')});
}

let tt=null;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),3200)}
$('#scrim').addEventListener('click',()=>{if(WELCOME_PENDING||GATED)return;closeDrawer();closeModal()});
$('#modal').addEventListener('click',e=>{if(GATED)return;if(e.target.id==='modal')closeModal()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&!WELCOME_PENDING&&!GATED){closeDrawer();closeModal()}});
$('#nav').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.go)go(b.dataset.go);else if(b.dataset.lock){closeSide();openTeaser(b.dataset.lock)}});
$('#b-side-contact').addEventListener('click',()=>{closeSide();openContact('general')});
$('#tb-talk').addEventListener('click',()=>openContact('general'));
function openSide(){$('#side').classList.add('on');$('#side-scrim').classList.add('on')}
function closeSide(){$('#side').classList.remove('on');$('#side-scrim').classList.remove('on')}
$('#hb').addEventListener('click',()=>$('#side').classList.contains('on')?closeSide():openSide());
$('#side-x').addEventListener('click',closeSide);$('#side-scrim').addEventListener('click',closeSide);
addEventListener('keydown',e=>{if(e.key==='Escape')closeSide()});

/* ---------- back office ---------- */
const BO={rows:[],filter:'all',poll:null,loaded:false,err:false};
const EVT=e=>{const f=k=>FIELDS[k]?FIELDS[k][0]:k,fv=(k,v)=>FIELDS[k]?FIELDS[k][1](v):v;
 switch(e.type){
  case'profile_set':return'Renseigne son profil';
  case'page_view':return`Consulte « ${esc(PAGES[e.page]||e.page)} »`;
  case'input_change':return`Modifie « ${esc(f(e.k))} » : ${e.from==null?'–':esc(fv(e.k,e.from))} → <b>${esc(fv(e.k,e.to))}</b>`;
  case'simulation':return`Simulation : gain net <b>${sgn(e.net)}</b> par an, seuil ${eur2(e.seuil)}`;
  case'stock_estimate':return'Utilise l’estimation du stock immobilisé';
  case'advanced_open':return e.what==='volume'?'Ouvre « Et si mon volume varie ? »':e.what==='incl'?'Consulte « Ce que comprend votre abonnement »':e.what==='stair'?'Consulte « Paliers de tarif »':(e.what||'').startsWith('horizon')?'Choisit l’horizon des économies ('+esc(e.what.slice(8))+' mois)':(e.what||'').startsWith('why')?'Consulte « Comment on estime ? » ('+esc(e.what.slice(4))+')':'Ouvre les hypothèses avancées';
  case'locked_click':return`Clique sur le menu verrouillé « ${esc(MODS[e.module]?MODS[e.module].n:e.module)} »`;
  case'teaser_cta':return`Demande une démo de la plateforme, depuis « ${esc(MODS[e.module]?MODS[e.module].n:e.module)} »`;
  case'export':return'Enregistre sa simulation (CSV)';
  case'contact_open':return e.ctx==='booking'?'Clique sur « Réserver un créneau »':'Ouvre le formulaire de contact';
  case'contact_request':return`<b>${e.mode==='rdv'?'Demande un rendez-vous':'Demande à être contacté(e)'}</b>${e.mode==='rdv'&&(e.date||e.slot)?' · '+esc([e.date,e.slot].filter(Boolean).join(', ')):''}${e.tel?' · '+esc(e.tel):''}${e.msg?' · « '+esc(e.msg)+' »':''}`;
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
function showNotice(){Tr.hold=true;const n=document.createElement('div');n.className='notice';n.innerHTML=`<div><b>Bonjour ${esc(PROFILE.first)}, bienvenue.</b><span>MagicPallet conserve vos saisies et les pages consultées afin de préparer votre étude chiffrée. Suppression sur demande : ${CONTACT.mail}.</span></div><button class="btn primary sm" type="button">Compris</button>`;document.body.appendChild(n);const ok=()=>{n.remove();Tr.hold=false;Tr.flush()};n.querySelector('button').onclick=ok;window._noticeOk=ok}
async function boot(){
  if(ADMIN){window.ACCT_WAIT=false;renderNav();return}
  let first=false;
  try{const j=await(await fetch('/api/me',{credentials:'same-origin'})).json();PROFILE=j.profile||null;first=!!j.firstVisit}catch(e){}
  window.ACCT_WAIT=false;renderNav();
  if(PROFILE&&PROFILE.first&&PROFILE.company){if(first)showNotice();else Tr.flush()}else gate();
}
render();
boot();
})();