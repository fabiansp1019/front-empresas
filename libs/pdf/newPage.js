const newPage = (doc, startY, neededHeight) => {
    const pageHeight = doc.internal.pageSize.height;
    const endY = pageHeight;
    const newPageY = 75;


    if (endY - startY - neededHeight < 30) {
        doc.addPage();

        return newPageY;
    }
    return startY;
};

export default newPage