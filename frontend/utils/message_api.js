export const fetchMessages = clip_id => (
    $.ajax({
        url: `api/clips/${clip_id}/messages/`,
    })
)

export const fetchMessage = message => (
    $.ajax({
        url: `api/clips/${message.clip_id}/messages/${message.id}`,
    })
)

export const postMessage = message  => {
    return $.ajax({
        url: `api/clips/${message.clip_id}/messages`,
        method: 'POST',
        data: { message }
    })
}