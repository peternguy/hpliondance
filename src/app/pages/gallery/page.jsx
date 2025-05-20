"use client";

import { useState } from "react";
import GalleryGrid     from "./grid";
import GalleryMinimap  from "./minimap";

export default function GalleryPage() {
    const [selected, setSelected] = useState(null);

    const images = Array.from(
        { length: 5 },
        (_, i) => `/img/ztz${i + 1}.jpg`
    );
  

    return selected === null
        ? <GalleryGrid images={images} onSelect={setSelected} />
        : <GalleryMinimap images={images} initialIndex={selected} onBack={() => setSelected(null)} />;
}