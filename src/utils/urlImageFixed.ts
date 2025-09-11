export const urlImageFixed = (url: string | undefined) => {
	if (!url) return "../assets/images/no-image.webp";
	let fixedUrl = url;
	if (fixedUrl.startsWith("https:https://")) {
		fixedUrl = fixedUrl.replace("https:https://", "https://");
	} else if (fixedUrl.startsWith("http:http://")) {
		fixedUrl = fixedUrl.replace("http:http://", "http://");
	}

	return fixedUrl;
};
