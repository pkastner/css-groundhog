const $ = (str, context = document) => [].slice.call(context.querySelectorAll(str));

export default $;
