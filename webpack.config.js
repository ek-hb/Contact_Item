module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // якщо розмір зображення менше за це значення, то воно буде закодовано в base64
              fallback: "file-loader",
            },
          },
        ],
      },
    ],
  },
};
