extends VBoxContainer


# Declare member variables here. Examples:
# var a = 2
# var b = "text"
var results:Array
#var labels:Array

func _on_HTTPRequest_request_completed(result, response_code, headers, body):
	if response_code==200:
#		results.push_front(JSON.parse(body.get_string_from_utf8()))
		var bodyParsed=JSON.parse(body.get_string_from_utf8())
		if bodyParsed.error==OK:
			for label in results:
				if typeof(label)==typeof(Label):
					label.queue_free()
			for ele in bodyParsed.result:
				results.push_back(Label.new())
				results.back().text=JSON.print(ele)
				self.add_child(results.back())
			return
	$Label.text="error"
