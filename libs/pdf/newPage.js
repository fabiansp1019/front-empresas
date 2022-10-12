const newPage = (doc, startY, neededHeight, cabece) => {
    const pageHeight = doc.internal.pageSize.height;

    const endY = pageHeight
    const newPageY = 55;


    if (endY - startY - neededHeight < 0) {

        doc.addPage();
        cabece(doc)

        return newPageY;
    }
    return startY;
};

export default newPage