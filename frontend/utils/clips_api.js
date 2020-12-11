export const fetchClips = () => (
    $.ajax({
        url: 'api/clips',
    })
)

export const fetchClip = clipId => (
    $.ajax({
        url: `api/clips/${clipId}`,
    })
)