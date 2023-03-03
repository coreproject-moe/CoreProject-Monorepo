import sys

if argument := sys.argv[1]:
    if argument == "character":
        from src.character import command

        command()

    elif argument == "staff":
        from src.staff import command

        command()

    elif argument == "genre":
        from src.genre import command

        command()
