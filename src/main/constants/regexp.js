const regexp = {
    SPACE: /\s+/g,
    TAGS: /<[^>]*>/g,
    ASCII: /(&#(\d+);)/g
};

export default regexp;
