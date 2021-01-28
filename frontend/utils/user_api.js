export const fetchUser= userId => (
    $.ajax({
        url: `/api/users/${userId}`
    })
)

export const updateUser = (userId, formData) => {

    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}`,
        data: formData,
        contentType: false,
        processData: false
    })

}