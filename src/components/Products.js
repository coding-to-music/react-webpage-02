import React from 'react';

function Products() {
    return (
        <div style={styles.page}>
            Products
        </div>
    )
}

const styles = {
    page: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '4em'
    }
}

export default Products;
