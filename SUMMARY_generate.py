import os

def create_summary():
    summary_content = "# Summary\n\n"

    # Get list of language folders in src directory
    language_folders = [folder for folder in os.listdir("src") if os.path.isdir(os.path.join("src", folder))]

    # Add main menu item for Dogecoin
    summary_content += "# [Dogecoin CORE](README.md)\n\n"

    # Loop through language folders
    for lang_folder in language_folders:
        # Construct path to README.md file in each language folder
        readme_path = os.path.join("src", lang_folder, "README.md")
        
        # Check if README.md exists for the language
        if os.path.exists(readme_path):
            # Add entry to the summary
            summary_content += f"- [{lang_folder.upper()}]({readme_path})\n"

        # Check for the existence of a 'doc' folder inside the language folder
        doc_folder_path = os.path.join("src", lang_folder, "doc")
        if os.path.exists(doc_folder_path) and os.path.isdir(doc_folder_path):
            # Add 'Development' menu item
            summary_content += "\n\n"
            summary_content += "# Development\n"
            # Loop through .md files in the 'doc' folder
            for doc_file in os.listdir(doc_folder_path):
                if doc_file.endswith(".md"):
                    # Add sub-menu item for each .md file
                    file_name = os.path.splitext(doc_file)[0]
                    summary_content += f"- [{file_name}]({lang_folder}/doc/{doc_file})\n"

    # Write summary content to SUMMARY.md file
    with open("src/SUMMARY.md", "w") as summary_file:
        summary_file.write(summary_content)

if __name__ == "__main__":
    create_summary()
