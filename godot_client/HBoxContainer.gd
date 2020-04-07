extends HBoxContainer
export(String, MULTILINE) var rowStringJSON=""

func _process(delta):
	$Label.text=rowStringJSON
