import os
import re
out_dir = 'out'
old_dir = '_next'
new_dir = 'next'
css_dir = os.path.join(out_dir, old_dir,'static', 'css')

include_dirs = ['html', 'js']
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

# Didn't found a solution to provide a prefix in nextjs to background-image-url in css files
# So here is a python code that does that for me
def replace_paths_in_css_files():
    print(f"{bcolors.OKBLUE}Replacing _next/static by ../ in css files{bcolors.ENDC}")
    pattern = f'{old_dir}/static/'
    
    for css_file_path in os.listdir(css_dir):
        print(css_file_path, '...', end=" ")
        try:
            css_file = open(os.path.join(css_dir, css_file_path), 'r+')
            updated_css = re.sub(pattern,'../', css_file.read())
            css_file.seek(0)
            css_file.truncate()
            css_file.write(updated_css)
            css_file.close()
            print(f"{bcolors.OKBLUE}Done{bcolors.ENDC}")

        except:
            print(f"{bcolors.FAIL}Failed{bcolors.ENDC}")

def change__next_to_next_in_js_and_html_files():
    print("Replacing _next by next in html and js files")

    pattern = old_dir
    for dir_name, dirs, files in os.walk(out_dir):
        files = [file for file in files if file.split('.')[-1] in include_dirs]

        for file in files:
            print(file, '...', end=" ")
            try:
                file = open(os.path.join(dir_name, file), 'r+')
                new_file_data = re.sub(pattern,new_dir, file.read())
                file.seek(0)
                file.truncate()
                file.write(new_file_data)
                file.close()
                print(f"{bcolors.OKBLUE}Done{bcolors.ENDC}")
            except:
                print(f"{bcolors.FAIL}Failed{bcolors.ENDC}")
            
    # os.rename(os.path.join(out_dir, old_dir), os.path.join(out_dir,new_dir))
    print(f"{bcolors.OKGREEN}Rename {old_dir} to {new_dir}{bcolors.ENDC}")

replace_paths_in_css_files()
# change__next_to_next_in_js_and_html_files()
