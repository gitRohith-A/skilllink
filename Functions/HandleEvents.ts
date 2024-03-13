export const handleOpen = () => {
    const drop = document.getElementById('user-dropdown');
    if (drop.classList.contains('hidden')) {
        drop.classList.remove('hidden');
        drop.classList.add('flex');
    } else {
        drop.classList.remove('flex');
        drop.classList.add('hidden');
    }
}
