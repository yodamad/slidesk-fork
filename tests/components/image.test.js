// eslint-disable-next-line import/no-unresolved
import { test, expect } from "bun:test";
import image from "../../src/components/image";

const data = "!image(myimage.png, alt text, 13, 12, float: left;)";

test("image", () => {
  expect(image(data)).toEqual(
    '<figure class="sd-img " style=" float: left;" >\n        <img src="myimage.png" loading="lazy" alt="alt text" width="13" height="12" />\n        <figcaption style=\'display: none;\'>alt text</figcaption>\n      </figure>',
  );
});

const data2 = "!image(myimage.png, alt text, 13, 12, float)";

test("image", () => {
  expect(image(data2)).toEqual(
    '<figure class="sd-img float" >\n        <img src="myimage.png" loading="lazy" alt="alt text" width="13" height="12" />\n        <figcaption style=\'display: none;\'>alt text</figcaption>\n      </figure>',
  );
});

const data3 = "!image(myimage.png, alt text, 13, 12, [float left])";

test("image", () => {
  expect(image(data3)).toEqual(
    '<figure class="sd-img float left" >\n        <img src="myimage.png" loading="lazy" alt="alt text" width="13" height="12" />\n        <figcaption style=\'display: none;\'>alt text</figcaption>\n      </figure>',
  );
});
