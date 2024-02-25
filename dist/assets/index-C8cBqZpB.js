import { j as e } from "./index-3AYkAJmI.js";
import { r as a } from "./react-vendor-D0AUhhr_.js";
function x() {
  const [l, c] = a.useState(Array(5).fill("")),
    n = a.useRef(Array(5).fill("")),
    i = (s, r) => {
      const t = [...l];
      (t[s] = r),
        c(t),
        r !== "" &&
          s < l.length - 1 &&
          n.current[s + 1] &&
          n.current[s + 1].focus();
    };
  return e.jsx("div", {
    className: "h-screen flex justify-center items-center bg-white",
    children: e.jsxs("div", {
      className:
        "rounded-3xl w-full max-w-md border-color g-gray-200 p-10 border border-solid border-[#EDEFF5]",
      children: [
        e.jsxs("div", {
          className: "text-center",
          children: [
            e.jsx("h1", {
              className: "text-2xl font-semibold",
              children: "Verify Email address!",
            }),
            e.jsx("p", {
              children: "We sent an OTP code to your email address",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex flex-col mt-6 gap-5",
          children: [
            e.jsx("div", {
              className: "flex gap-2 justify-evenly",
              children: l.map((s, r) =>
                e.jsx(
                  "input",
                  {
                    className:
                      "rounded-xl h-14 w-14 border border-solid text-center border-black text-black-100 text-2xl",
                    type: "text",
                    maxLength: 1,
                    size: 1,
                    pattern: "[0-9]",
                    value: s,
                    onChange: (t) => i(r, t.target.value),
                    required: !0,
                    ref: (t) => (n.current[r] = t),
                  },
                  r,
                ),
              ),
            }),
            e.jsx("div", {
              children: e.jsx("button", {
                className: "rounded-xl w-full text-[white] bg-[#5573EF] p-3",
                children: "Continue",
              }),
            }),
            e.jsx("div", {
              className: "text-center",
              children: e.jsxs("p", {
                children: [
                  "Resent code in ",
                  e.jsx("span", {
                    className: "text-[#5573EF]",
                    children: "3:50",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
export { x as default };
