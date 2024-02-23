import os

def create_summary():
    summary_content = "# Summary\n\n"

    # Get list of language folders in src directory
    language_folders = [folder for folder in os.listdir("src") if os.path.isdir(os.path.join("src", folder))]

    # Loop through language folders
    for lang_folder in language_folders:
        # Check for the existence of a 'doc' folder inside the language folder
        doc_folder_path = os.path.join("src", lang_folder, "doc")
        if os.path.exists(doc_folder_path) and os.path.isdir(doc_folder_path):
            # Add 'Development' menu item
            summary_content += f"\n\n# {lang_folder.upper()}\n"
            # Loop through .md files in the 'doc' folder
            for doc_file in os.listdir(doc_folder_path):
                if doc_file.endswith(".md"):
                    # Add sub-menu item for each .md file
                    file_name = os.path.splitext(doc_file)[0]
                    summary_content += f"- [{file_name}]({lang_folder}/doc/{doc_file})\n"

    # Write summary content to SUMMARY.md file
    with open("src/SUMMARY.md", "w") as summary_file:
        summary_file.write(summary_content)

def create_language_menu():
    # Get list of language folders in src directory
    language_folders = [folder for folder in os.listdir("src") if os.path.isdir(os.path.join("src", folder))]
    
    # Generate HTML content for language menu
    language_menu_html = ""
    for lang_folder in language_folders:
        language_menu_html += f"<li><a href='{lang_folder}'>{lang_folder}</a></li>"

    return language_menu_html

def process_md_files():
    # Generate language menu HTML content
    language_menu_html = create_language_menu()

    # Generate CSS for floating div
    css_content = """
    <style>
    .language-menu {
        position: fixed;
        top: 50px;
        right: 20px;
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 10px;
        z-index: 1000;
    }
    </style>
    """

    # Traverse through all .md files in src directory
    for root, dirs, files in os.walk("src"):
        for file in files:
            if file.endswith(".md") and file != "SUMMARY.md":
                # Read original content
                with open(os.path.join(root, file), "r") as md_file:
                    content = md_file.read()
                
                # Add language menu and CSS to content
                modified_content = f"{css_content}\n<div class='language-menu'><ul>{language_menu_html}</ul></div>\n{content}"
                
                # Write modified content back to the file
                with open(os.path.join(root, file), "w") as md_file:
                    md_file.write(modified_content)

if __name__ == "__main__":
    create_summary()
    process_md_files()
