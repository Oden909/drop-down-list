document.addEventListener('DOMContentLoaded', function(){
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item =>{
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const sublist = item.querySelector('.book-sublist');
            if (sublist){
                sublist.style.display = sublist.style.display === 'block' ? 'none' : 'block';
            } else{
                const itemLink = item.querySelector('a');
                if (itemLink && itemLink.href) {
                    window.location.href = itemLink.href;
                }
            }
        });
    });
    document.addEventListener('click', (e) =>{
        listItems.forEach(item =>{
            const sublist = item.querySelector('.book-sublist');
            if (sublist && sublist.style.display === 'block' && !item.contains(e.target)){
                sublist.style.display = 'none';
            }
        });
    });
});
