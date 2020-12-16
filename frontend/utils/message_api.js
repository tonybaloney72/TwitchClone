export const fetchMessage = messageId => (
    $.ajax({
        url: `api/messages/${messageId}`,
    })
)

export const postMessage = message  => {
    return $.ajax({
        url: "api/messages",
        method: 'POST',
        data: { message }
    })
}