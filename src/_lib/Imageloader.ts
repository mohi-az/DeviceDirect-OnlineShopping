function imageLoader({ src }: { src: string }) {
    return `/images/product/${src}`;
}
module.exports = imageLoader;
