page = PAGE
page.10 = FLUIDTEMPLATE
page.10 {
    template = FILE
    template.file = fileadmin/layout/templates/layout.html
    variables {
        content < styles.content.get
    }
}