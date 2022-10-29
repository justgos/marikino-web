module.exports = function(api) {
  api.cache(true)

  const plugins = ["@emotion"]
  const presets = [
    "next/babel",
    [
      "@babel/preset-react",
      { "runtime": "automatic", "importSource": "@emotion/react" }
    ]
  ];

  return { plugins, presets }
}
