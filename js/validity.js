document.addEventListener('DOMContentLoaded', () => {
    document?.querySelectorAll('.mustValidate').forEach($form => {
        $form?.querySelectorAll('input').forEach($input => {
            $input.addEventListener('input', () => {
                $input.classList.add('validity')
            })
        })
    })
})