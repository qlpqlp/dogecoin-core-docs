import os  # Import the os module

def create_summary():
    summary_content = "# Summary\n\n"

    # Get list of language folders in src directory
    language_folders = [folder for folder in os.listdir("src") if os.path.isdir(os.path.join("src", folder)) and folder != "images"]
    
    # Sort language folders starting with "en" first, then alphabetically
    language_folders.sort(key=lambda x: (x != "en", x))

    # Loop through language folders
    for lang_folder in language_folders:
        summary_content += f"# [{lang_folder}] Dogecoin Core\n\n"
        summary_content += f"- [Readme](./{lang_folder}/README.md)\n\n"
        
        # Construct path to doc folder inside each language folder
        doc_folder_path = os.path.join("src", lang_folder, "doc")        
        if os.path.exists(doc_folder_path) and os.path.isdir(doc_folder_path):
            # Add Development menu item
            summary_content += f"# [{lang_folder}] Development\n"            
            # Loop through .md files in the 'doc' folder
            for doc_file in sorted(os.listdir(doc_folder_path)):  # Sort files alphabetically
                if doc_file.endswith(".md"):
                    # Add sub-menu item for each .md file
                    file_name = os.path.splitext(doc_file)[0]
                    summary_content += f"- [{file_name.replace('--', ' ').capitalize()}](./{lang_folder}/doc/{doc_file})\n"

    # Write summary content to SUMMARY.md file
    with open("src/SUMMARY.md", "w") as summary_file:
        summary_file.write(summary_content)


def create_language_menu():
    # Get list of language folders in src directory, excluding "images"
    language_folders = [folder for folder in os.listdir("src") if os.path.isdir(os.path.join("src", folder)) and folder != "images"]
    
    # Sort language folders starting with "en" first, then alphabetically
    language_folders.sort(key=lambda x: (x != "en", x))

    # Generate HTML content for language menu
    language_menu_html = '<div class="dropdown" style="position: fixed; top: 50px; right: 20px; z-index: 1000;">'
    language_menu_html += '<div class="dropdown-content" style="background-color: #fff;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1000;border-radius:5px">'
    for lang_folder in language_folders:
        language_menu_html += f"<a style='color: black; padding: 5px 5px; text-decoration: none; display: block;' href='/{lang_folder}/index.html'>{lang_folder.upper()}</a>"
    language_menu_html += "</div></div>"

    return language_menu_html

def process_md_files():
    # Generate language menu HTML content
    language_menu_html = create_language_menu()

    # Traverse through all .md files in src directory
    for root, dirs, files in os.walk("src"):
        for file in files:
            if file.endswith(".md") and file != "SUMMARY.md":
                # Read original content
                with open(os.path.join(root, file), "r") as md_file:
                    content = md_file.read()
                
                # Add language menu
                modified_content = f"{content}\n{language_menu_html}"
                
                # Write modified content back to the file
                with open(os.path.join(root, file), "w") as md_file:
                    md_file.write(modified_content)

if __name__ == "__main__":
    create_summary()
    process_md_files()
