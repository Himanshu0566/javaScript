const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const frooti = {
  name: "abhishek Tiwar",
  charactor: "Chamna chutiya",
  body: "Sexy",
};

Object.defineProperty(frooti, "charactor", {
  writable: false,
  enumerable: false,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(frooti, "charactor"));
frooti.name = "RAhul;";

frooti.charactor = "good Boy";
console.log(frooti);

for (const [key, value] of Object.entries(frooti)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
