extends TextureButton

export var scene : int

func _ready():
	var ctrl = "/root/Control/"
	if (scene == 0):
		get_node(ctrl+"Button_SignUp").connect("pressed", self, "G2Home")
		get_node(ctrl+"Button_SignIn").connect("pressed", self, "G2SignIn")
	elif (scene == 1):
		get_node(ctrl+"Button_SignIn").connect("pressed", self, "G2Home")
		get_node(ctrl+"Button_SignUp").connect("pressed", self, "G2SignUp")

func G2Home():
	get_tree().change_scene("res://scenes/Home_Page.tscn")
func G2Profile():
	get_tree().change_scene("res://scenes/My_Profile.tscn")
func G2SignIn():
	get_tree().change_scene("res://scenes/Sign_In.tscn")
func G2SignUp():
	get_tree().change_scene("res://scenes/Sign_up.tscn")
