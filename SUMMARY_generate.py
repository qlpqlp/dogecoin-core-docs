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
        language_menu_html += f"<li><a href='#' onclick='navigateToLanguage(\"{lang_folder}\")'>{lang_folder}</a></li>"

    return language_menu_html

def generate_language_selection_script():
    # Generate JavaScript function to navigate to language folder and file
    js_script = """
    <script>
    function navigateToLanguage(langFolder) {
        var langFile = langFolder + '.md'; // Assuming language file has the same name as folder
        var url = 'src/' + langFolder + '/' + langFile;
        window.location.href = url;
    }
    </script>
    """
    return js_script

def process_md_files():
    # Generate language menu and JavaScript
    language_menu_html = create_language_menu()
    js_script = generate_language_selection_script()

    # Traverse through all .md files in src directory
    for root, dirs, files in os.walk("src"):
        for file in files:
            if file.endswith(".md") and file != "SUMMARY.md":
                # Read original content
                with open(os.path.join(root, file), "r") as md_file:
                    content = md_file.read()
                
                # Add language menu and JavaScript to content
                modified_content = f"{content}\n\n{js_script}\n\n<div class='language-menu'>{language_menu_html}</div>"
                
                # Write modified content back to the file
                with open(os.path.join(root, file), "w") as md_file:
                    md_file.write(modified_content)

if __name__ == "__main__":
    create_summary()
    process_md_files()
