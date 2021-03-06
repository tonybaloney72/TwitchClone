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

export const postClip = formData => (
    $.ajax({
        url: "api/clips",
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    })
)

export const destroyClip = clip => {
    return (
    $.ajax({
        url: `api/clips/${clip}`,
        method: 'DELETE'
    })
)}