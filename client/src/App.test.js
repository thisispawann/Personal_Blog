import React from "react";
import Blogs from './Blogs';

// testing
it("Api testing", async function () {
    const res = new Blogs();
    // console.warn(await res.api());
    var data =await res.api();

    expect(data[0].title).toEqual("1");
})