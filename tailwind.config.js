// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js","./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
 
//   theme: {
//     extend: {},
//   },
//   plugins: [require('tw-elements/dist/plugin')],
// }


/ @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src//.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ]
}