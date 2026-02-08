export function VideoPlayer({ url, title }: { url: string; title: string }) {
    // Helper to ensure embed URL
    const getEmbedUrl = (inputUrl: string) => {
        if (inputUrl.includes("embed/")) return inputUrl;
        const videoId = inputUrl.split("v=")[1]?.split("&")[0];
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
        return inputUrl;
    };

    return (
        <div className="aspect-video w-full overflow-hidden rounded-xl border bg-black shadow-lg">
            <iframe
                src={getEmbedUrl(url)}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
            />
        </div>
    );
}
